#!/usr/bin/env python3
#
# Copyright (C) 2017-2019 Sergej Schumilo, Cornelius Aschermann, Tim Blazytko
# Copyright (C) 2019-2020 Intel Corporation
#
# SPDX-License-Identifier: AGPL-3.0-or-later

"""
Given a kAFL workdir, produce a text-based UI with status summary/overview.
"""

import curses
import string
import msgpack
import os
import sys
import time
import inotify.adapters
import glob
import psutil
from common.util import read_binary_file
from threading import Thread, Lock


class Interface:
    def __init__(self, stdscr):
        self.stdscr = stdscr
        self.y = 0

    def print_title_line(self, title):
        title = "[%s%s]" % (title, " " * (len(title) % 2))
        pad = '░' * ((80 - len(title)) // 2)
        self.stdscr.addstr(self.y, 0, pad + title + pad)
        self.y += 1

    def print_sep_line(self):
        self.stdscr.addstr(self.y, 0, '━' * 80)
        self.y += 1

    def print_thin_line(self):
        self.stdscr.addstr(self.y, 0, '─' * 80)
        self.y += 1

    def print_empty(self):
        self.stdscr.addstr(self.y, 0, '┃' + ' ' * 78 + '┃')
        self.y += 1

    def print_info_line(self, pairs, sep=" │ ", end="┃", prefix=""):
        infos = []
        for info in pairs:
            infolen = len(info[1]) + len(info[2])
            if infolen == 0:
                infos.append(" ".ljust(info[0]+2))
            else:
                infos.append("%s:%s %s" % (
                    info[1], " ".ljust(info[0]-infolen), info[2]))

        self.stdscr.addstr(self.y, 0, '┃' + prefix + sep.join(infos) + " " + end)
        self.y += 1

    def refresh(self):
        self.y = 0
        self.stdscr.refresh()

    def clear(self):
        self.stdscr.clear()

    def print_hexdump(self, data, max_rows=10):
        width = 16
        for ri in range(0, max_rows):
            row = data[width * ri:width * (ri + 1)]
            if len(row) > 0:
                self.print_hexrow(row, offset=ri * width)
            else:
                self.print_empty()

    def print_hexrow(self, row, offset=0):
        def map_printable(char):
            s_char = chr(char)
            if s_char in string.printable and s_char not in "\t\n\r\x0b\x0c":
                return s_char
            return "."

        def map_hex(char):
            return hex(char)[2:].ljust(2, "0")

        prefix = "┃0x%07x: " % offset
        hex_dmp = prefix + (" ".join(map(map_hex, row)))
        hex_dmp = hex_dmp.ljust(61)
        print_dmp = ("".join(map(map_printable, row)))
        print_dmp = print_dmp.ljust(16)
        print_dmp = "│" + print_dmp + " ┃"
        self.stdscr.addstr(self.y, 0, hex_dmp)
        self.stdscr.addstr(self.y, len(hex_dmp), print_dmp)
        self.y += 1


def pnum(num):
    assert num >= 0
    if num <= 9999:
        return "%d" % num
    num /= 1000.0
    if num <= 999:
        return "%.1fK" % num
    num /= 1000.0
    if num <= 999:
        return "%.1fM" % num
    num /= 1000.0
    if num <= 999:
        return "%.1fG" % num
    num /= 1000.0
    if num <= 999:
        return "%.1fT" % num
    num /= 1000.0
    if num <= 999:
        return "%.1fP" % num
    assert False

def pbyte(num):
    assert num >= 0
    if num <= 999:
        return "%d" % num
    num /= 1024.0
    if num <= 999:
        return "%.1fK" % num
    num /= 1024.0
    if num <= 999:
        return "%.1fM" % num
    num /= 1024.0
    if num <= 999:
        return "%.1fG" % num
    num /= 1024.0
    if num <= 999:
        return "%.1fT" % num
    num /= 1024.0
    if num <= 999:
        return "%.1fP" % num
    assert False


def pfloat(flt):
    assert flt >= 0
    if flt <= 999:
        return "%.1f" % flt
    return pnum(flt)


def ptime(secs):
    if not secs:
        return "None Yet"
    if secs < 2: # clear the jitter
        return "Just Now!"
    secs = int(secs)
    seconds = secs % 60
    secs //= 60
    mins = secs % 60
    secs //= 60
    hours = secs % 24
    days = secs  // 24
    if days > 0:
        return "%dd,%02dh" % (days, hours)
    if hours > 0:
        return "%2dh%02dm" % (hours, mins)
    return     "%2dm%02ds" % (mins, seconds)


class GuiDrawer:
    def __init__(self, workdir, stdscr):
        self.gui_mutex = Lock()
        curses.start_color()
        curses.init_pair(1, curses.COLOR_WHITE, curses.COLOR_BLACK)
        curses.init_pair(2, curses.COLOR_GREEN, curses.COLOR_BLACK)
        curses.init_pair(3, curses.COLOR_YELLOW, curses.COLOR_BLACK)
        curses.init_pair(4, curses.COLOR_RED, curses.COLOR_BLACK)
        default_col = curses.color_pair(1)

        # Fenster und Hintergrundfarben
        stdscr.bkgd(default_col)
        self.gui = Interface(stdscr)
        self.stdscr = stdscr
        self.current_slave_id = 0

        self.finished = False
        self.data = GuiData(workdir)
        self.watcher = Thread(target=self.watch, args=(workdir,))
        self.cpu_watcher = Thread(target=self.watch_cpu, args=())
        self.loop = Thread(target=self.loop, args=())
        self.watcher.daemon = True
        self.watcher.start()
        self.cpu_watcher.daemon = True
        self.cpu_watcher.start()

        stdscr.refresh()
        self.loop.start()
        self.loop.join()

    def draw(self):
        d = self.data
        self.gui.print_title_line("kAFL v0.2")
        self.gui.print_sep_line()
        #self.gui.print_info_line([(37, "Target", d.target()), (38, "Config", d.config())])
        self.gui.print_info_line([
            (15, "Runtime", ptime(d.runtime())),
            (15, "#Execs", pnum(d.total_execs())),
            (15, "Exec/s", pnum(d.execs_p_sec_avg())),
            (15, "Slaves", "%d/%d" %
                (d.num_slaves(), d.cpu_cores()))])
        self.gui.print_info_line([
            (11, "Used", pnum(d.cpu_used()) + "%"),
            (15, "User", pfloat(d.cpu_user()) + "%"),
            (15, "Guest",  pfloat(d.cpu_vm()) + "%"),
            (15, "Stability",  "%3d%%" % d.stability())], prefix="CPU ")
        self.gui.print_info_line([
            (11, "Used", pfloat(d.ram_used()) + "%"),
            (15, "Avail", pbyte(d.ram_avail())),
            (15, "Total", pbyte(d.ram_total()) + "%"),
            (15, "Reset/s", pnum(d.reload_p_sec()))], prefix="Mem ")
        self.gui.print_thin_line()
        self.gui.print_info_line([
            (15, "Path Info", ""),
            (15, "Bitmap Stats", ""),
            (35, "Findings", "")])
        self.gui.print_info_line([
            (15, " Total", pnum(d.paths_total())),
            (15, "", ""),
            (35, " Crash", "%6s (N/A) %10s" % (pnum((d.num_found("crash"))),
                                                 ptime(d.time_since("crash"))))])
        self.gui.print_info_line([
            (15, " Seeds", pnum(d.yield_imported())),
            (15, " Edges", pnum(d.bitmap_used())),
            (35, " AddSan", "%6s (N/A) %10s" % (pnum((d.num_found("kasan"))),
                                                 ptime(d.time_since("kasan"))))])
        self.gui.print_info_line([
            (15, " Favs", pnum(d.fav_total())),
            (15, " p(col)", pfloat(d.p_coll()) + "%"),
            (35, " Timeout", "%6s (N/A) %10s" % (pnum((d.num_found("timeout"))),
                                                 ptime(d.time_since("timeout"))))])
        self.gui.print_info_line([
            (15, " Norm", pnum(d.normal_total())),
            #(15, " Stable",  pfloat(d.stability()) + "%"),
            (15, " Pending", pfloat(d.pending_fav()) + "%"),
            (35, " Regular", "%6s (N/A) %10s" % (pnum((d.num_found("regular"))),
                                                 ptime(d.time_since("regular"))))])
        self.gui.print_thin_line()
        self.gui.print_info_line([
            (10, "Init", pnum(d.yield_init())),
            (10, "Grim", pnum(d.yield_grim())),
            (10, "Redq", pnum(d.yield_redq()+d.yield_color())),
            (10, "Det", pnum(d.yield_det())),
            (10, "Hvc", pnum(d.yield_havoc()))
            ], prefix="Yld: ")
        self.gui.print_info_line([
            (10, "Init", pnum(d.fav_init())),
            (10, "Rq/Gr", pnum(d.fav_redq())),
            (10, "Det", pnum(d.fav_deter())),
            (10, "Hvc", pnum(d.fav_havoc())),
            (10, "Fin", pnum(d.fav_fin()))], prefix="Fav: ")
        self.gui.print_info_line([
            (10, "Init", pnum(d.normal_init())),
            (10, "Rq/Gr", pnum(d.normal_redq())),
            (10, "Det", pnum(d.normal_deter())),
            (10, "Hvc", pnum(d.normal_havoc())),
            (10, "Fin", pnum(d.normal_fin()))], prefix="Nrm: ")
        #self.gui.print_sep_line()
        self.gui.print_thin_line()
        for i in range(0, d.num_slaves()):
            hl = " "
            if i == self.current_slave_id:
                hl = ">"
            nid = d.slave_input_id(i)
            if nid not in [None, 0]:
                self.gui.print_info_line([(15, "", d.slave_stage(i)),
                                          (10, "node", "%d" % d.slave_input_id(i)),
                                          (14,  "fav/lvl",  "%d/%d" % (d.node_fav_bits(nid),
                                                                      d.node_level(nid))),
                                          (12, "exec/s", pnum(d.slave_execs_p_sec(i)))],
                                          prefix="%c Slave %d" % (hl, i))
            else:
                self.gui.print_info_line([(15, "", d.slave_stage(i)),
                                          (10, "node", "  N/A"),
                                          (14,  "fav/lvl",  " N/A"),
                                          (12, "exec/s",  "  N/A")],
                                          prefix="%c Slave %d" % (hl, i))

        i = self.current_slave_id
        self.gui.print_thin_line()
        self.gui.print_title_line("Payload Info")
        self.gui.print_sep_line()
        nid = d.slave_input_id(i)
        if nid not in [None, 0]:
            self.gui.print_info_line([
                (10, "Parent", "%8d" % d.node_parent_id(nid)),
                (10, "Size",   pbyte(d.node_size(nid)) + "B"),
                (10, "Bytes",  pnum(d.node_new_bytes(nid))),
                (10, "Bits",   pnum(d.node_new_bits(nid))),
                (10, "Exit",   d.node_exit_reason(nid))])
            self.gui.print_thin_line()
            self.gui.print_hexdump(d.node_payload(nid), max_rows=12)
            self.gui.print_thin_line()
        else:
            self.gui.print_info_line([
                (16, "Parent", "    N/A"),
                (14, "Size",   "    N/A"),
                (12, "Bytes",  "  N/A"),
                (12, "Bits",   "  N/A"),
                (12, "Exit",   " ")])
            self.gui.print_thin_line()
            self.gui.print_hexdump(b"importing...", max_rows=12)
        #self.gui.print_title_line("Log")
        self.gui.refresh()

    def loop(self):
        d = self.data
        while True:
            char = self.stdscr.getch()
            self.gui_mutex.acquire()
            theme = 0
            try:
                if char == curses.KEY_UP:
                    self.current_slave_id = (self.current_slave_id - 1) % d.num_slaves()
                elif char == curses.KEY_DOWN:
                    self.current_slave_id = (self.current_slave_id + 1) % d.num_slaves()
                elif char == ord("q") or char == ord("Q"):
                    self.finished = True
                    return
                self.draw()
            finally:
                self.gui_mutex.release()
                time.sleep(0.1)

    def watch(self, workdir):
        d = self.data
        mask = (inotify.constants.IN_MOVED_TO)
        self.inotify = inotify.adapters.Inotify()
        i = self.inotify
        i.add_watch(workdir, mask)
        i.add_watch(workdir + "/metadata/", mask)

        for event in i.event_gen(yield_nones=False):
            if self.finished:
                return
            self.gui_mutex.acquire()
            try:
                (_, type_names, path, filename) = event
                d.update(path, filename)
                self.draw()
            finally:
                self.gui_mutex.release()

    def watch_cpu(self):
        while True:
            if self.finished:
                return
            cpu_info = psutil.cpu_times_percent(interval=2, percpu=False)
            mem_info = psutil.virtual_memory()
            swap_info = psutil.swap_memory()
            self.gui_mutex.acquire()
            try:
                self.data.mem = mem_info
                self.data.cpu = cpu_info
                self.data.swap = swap_info
                self.draw()
            finally:
                self.gui_mutex.release()


class GuiData:

    def __init__(self, workdir):
        self.workdir = workdir
        self.execs_avg = 0
        self.slave_stats = list()
        self.load_initial()

    def load_initial(self):
        print("Waiting for slaves to launch..")
        self.cpu = psutil.cpu_times_percent(interval=0.01, percpu=False)
        self.mem = psutil.virtual_memory()
        self.cores_phys = psutil.cpu_count(logical=False)
        self.cores_virt = psutil.cpu_count(logical=True)
        self.stats = self.read_file("stats")

        num_slaves = self.stats.get("num_slaves",0)
        for slave_id in range(0, num_slaves):
            self.slave_stats.append(self.read_file("slave_stats_%d" % slave_id))

        # TODO frontend is using time.time() when we actually need time.clock(), plus perhaps the startup time/date
        self.starttime = min([x["start_time"] for x in self.slave_stats])

        self.nodes = {}
        for metadata in glob.glob(self.workdir + "/metadata/node_*"):
            self.load_node(metadata)
        self.aggregate()

    def load_node(self, name):
        node_id = int(name.split("_")[-1])
        self.nodes[node_id] = self.read_file("metadata/node_%05d" % node_id)

    def aggregate(self):
        self.aggregated = {
            "fav_states": {},
            "normal_states": {},
            "exit_reasons": {"regular": 0, "crash": 0, "kasan": 0, "timeout": 0},
            "last_found": {"regular": 0, "crash": 0, "kasan": 0, "timeout": 0}
        }
        for nid in self.nodes:
            node = self.nodes[nid]
            self.aggregated["exit_reasons"][node["info"]["exit_reason"]] += 1
            if node["info"]["exit_reason"] == "regular":
                states = self.aggregated["normal_states"]
                if len(node["fav_bits"]) > 0:
                    states = self.aggregated["fav_states"]
                nodestate = node["state"]["name"]
                states[nodestate] = states.get(nodestate, 0) + 1

            last_found = self.aggregated["last_found"][node["info"]["exit_reason"]]
            this_found = node["info"]["time"]
            if last_found < this_found:
                self.aggregated["last_found"][node["info"]["exit_reason"]] = this_found


    def target(self):
        return "foo"

    def config(self):
        return "bar"

    def runtime(self):
        return max([x["run_time"] for x in self.slave_stats])

    def execs_p_sec(self):
        return sum([x["execs/sec"] for x in self.slave_stats])

    def execs_p_sec_avg(self):
        return self.total_execs()/self.runtime()

    def slave_execs_p_sec(self, sid):
        return self.slave_stats[i].get(["execs/sec"],0)

    def total_execs(self):
        return sum([x["total_execs"] for x in self.slave_stats])

    def num_slaves(self):
        return len(self.slave_stats)

    def num_found(self, reason):
        return self.aggregated["exit_reasons"][reason]

    def time_since(self, reason):
        time_stamp = self.aggregated["last_found"][reason]
        if not time_stamp:
            return None
        return self.starttime + self.runtime() - time_stamp

    def pending_fav(self):
        if self.fav_total() > 0:
            return 100 * (self.fav_total() - self.fav_fin()) / float(self.fav_total())
        return 0

    def stability(self):
        # chance p() to survive 100 executions: ((total-crashes)/total)^100
        if self.total_execs() == 0:
            return 0
        n = self.total_execs()
        c = self.total_reloads()
        return 100*((n-c)/n)**100

    def total_reloads(self):
        total_reloads = 0
        for slave_info in self.slave_stats:
            total_reloads += slave_info["num_reload"]
        return total_reloads

    def reload_p_sec(self):
        return self.total_reloads()/self.runtime()

    def cycles(self):
        return self.stats.get("cycles", 0)

    def cpu_total(self):
        return "%d(%d)" % (self.cores_phys, self.cores_virt)

    def cpu_cores(self):
        return self.cores_phys

    def cpu_used(self):
        return self.cpu.user + self.cpu.system

    def cpu_user(self):
        return self.cpu.user - self.cpu.guest

    def cpu_vm(self):
        return self.cpu.guest

    def ram_total(self):
        return self.mem.total

    def ram_avail(self):
        return self.mem.available

    def ram_used(self):
        return 100 * float(self.mem.used) / float(self.mem.total)

    def swap_used(self):
        return self.swap.used

    def yield_imported(self):
        return self.stats["yield"].get("import", 0)

    def yield_init(self):
        return (self.stats["yield"].get("trim", 0) +
                self.stats["yield"].get("trim_funky", 0) +
                self.stats["yield"].get("calibrate", 0))

    def yield_grim(self):
        return (self.stats["yield"].get("grim_inference", 0) +
                self.stats["yield"].get("grim_generalize", 0) +
                self.stats["yield"].get("grim_recursive", 0) +
                self.stats["yield"].get("grim_extension", 0) +
                self.stats["yield"].get("grim_repl_str", 0))

    def yield_redq(self):
        return (self.stats["yield"].get("redq_mutate", 0) +
                self.stats["yield"].get("redq_dict", 0))

    def yield_color(self):
        return self.stats["yield"].get("redq_coloring", 0)

    def yield_havoc(self):
        return (self.stats["yield"].get("afl_havoc", 0) +
                self.stats["yield"].get("afl_splice", 0))

    def yield_det(self):
        return (self.stats["yield"].get("afl_arith_1", 0) +
                self.stats["yield"].get("afl_arith_2", 0) +
                self.stats["yield"].get("afl_arith_4", 0) +
                self.stats["yield"].get("afl_flip_1/1", 0) +
                self.stats["yield"].get("afl_flip_2/1", 0) +
                self.stats["yield"].get("afl_flip_4/1", 0) +
                self.stats["yield"].get("afl_flip_8/1", 0) +
                self.stats["yield"].get("afl_flip_8/2", 0) +
                self.stats["yield"].get("afl_flip_8/4", 0) +
                self.stats["yield"].get("afl_int_1", 0) +
                self.stats["yield"].get("afl_int_2", 0) +
                self.stats["yield"].get("afl_int_4", 0))


    def normal_total(self):
        return (self.normal_init() + self.normal_redq() + self.normal_deter() +
                self.normal_havoc() + self.normal_fin())

    def normal_init(self):
        return self.aggregated["normal_states"].get("initial", 0)

    def normal_redq(self):
        return self.aggregated["normal_states"].get("redq/grim", 0)

    def normal_deter(self):
        return self.aggregated["normal_states"].get("deterministic", 0)

    def normal_havoc(self):
        return self.aggregated["normal_states"].get("havoc", 0)
        return 0

    def normal_fin(self):
        return self.aggregated["normal_states"].get("final", 0)

    def fav_total(self):
        return (self.fav_init() + self.fav_redq() +
                self.fav_deter() + self.fav_havoc() + self.fav_fin())

    def fav_init(self):
        return self.aggregated["fav_states"].get("initial", 0)

    def fav_redq(self):
        return self.aggregated["fav_states"].get("redq/grim", 0)

    def fav_deter(self):
        return self.aggregated["fav_states"].get("deterministic", 0)

    def fav_havoc(self):
        return self.aggregated["fav_states"].get("havoc", 0)

    def fav_fin(self):
        return self.aggregated["fav_states"].get("final", 0)

    def bitmap_size(self):
        return 64 * 1024

    def bitmap_used(self):
        return self.stats["bytes_in_bitmap"]

    def paths_total(self):
        return self.stats["paths_total"]

    def p_coll(self):
        return 100.0 * float(self.bitmap_used()) / float(self.bitmap_size())

    def slave_stage(self, i):
        method = self.slave_stats[i].get("method", None)
        stage  = self.slave_stats[i].get("stage", "[waiting..]")
        if method:
            #return "%s/%s" % (stage[0:6],method[0:12])
            return "%s" % method[0:14]
        else:
            return stage[0:14]

    def slave_execs_p_sec(self, i):
        return self.slave_stats[i].get("execs/sec")

    def slave_total_execs(self, i):
        return self.slave_stats[i].get("total_execs")

    def slave_input_id(self, i):
        return self.slave_stats[i]["node_id"]

    def node_size(self, nid):
        return self.nodes[nid]["payload_len"]

    def node_level(self, nid):
        return self.nodes[nid].get("level", 0)

    def node_parent_id(self, nid):
        return self.nodes[nid]["info"]["parent"]

    def node_fav_bits(self, nid):
        if not self.nodes.get(nid, None):
            return -1
        favs = self.nodes[nid].get("fav_bits", None)
        if favs:
            return len(favs)
        else:
            return 0

    def node_new_bytes(self, nid):
        return len(self.nodes[nid]["new_bytes"])

    def node_new_bits(self, nid):
        return len(self.nodes[nid]["new_bits"])

    def node_exit_reason(self, nid):
        return self.nodes[nid]["info"]["exit_reason"][0]

    def node_payload(self, nid):
        exit_reason = self.nodes[nid]["info"]["exit_reason"]
        filename = self.workdir + "/corpus/%s/payload_%05d" % (exit_reason, nid)
        return read_binary_file(filename)[0:1024]  # TODO remove path traversal vuln

    def load_slave(self, id):
        self.slave_stats[id] = self.read_file("slave_stats_%d" % id)

    def load_global(self):
        self.stats = self.read_file("stats")

    def update(self, pathname, filename):
        if "node_" in filename:
            self.load_node(pathname + "/" + filename)
            self.aggregate()
        elif "slave_stats" in filename:
            for i in range(0, self.num_slaves()):
                self.load_slave(i)
        elif filename == "stats":
            self.load_global()

    def read_file(self, name):
        retry = 4
        data = None
        while retry > 0:
            try:
                data = read_binary_file(self.workdir + "/" + name)
                break
            except:
                retry -= 1
        if data:
            return msgpack.unpackb(data, raw=False, strict_map_key=False)
        else:
            return None


def main(stdscr):
    GuiDrawer(sys.argv[1], stdscr)

import locale
locale.setlocale(locale.LC_ALL, '')
code = locale.getpreferredencoding()

if len(sys.argv) == 2:
    curses.wrapper(main)
else:
    print("Usage: " + sys.argv[0] + " <kafl-workdir>")
