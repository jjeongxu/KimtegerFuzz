Search.setIndex({"docnames": ["dev/documentation", "how_to/linux_tutorial", "how_to/sharedir_tutorial", "how_to/windows_tutorial", "index", "reference/deployment", "reference/hypercall_api", "reference/user_interface", "reference/workdir_layout", "tutorials/fuzzing_linux_kernel", "tutorials/installation", "tutorials/introduction"], "filenames": ["dev/documentation.md", "how_to/linux_tutorial.md", "how_to/sharedir_tutorial.md", "how_to/windows_tutorial.md", "index.md", "reference/deployment.md", "reference/hypercall_api.md", "reference/user_interface.md", "reference/workdir_layout.md", "tutorials/fuzzing_linux_kernel.md", "tutorials/installation.md", "tutorials/introduction.md"], "titles": ["Building the documentation", "Getting Started with Linux Fuzzing", "Using Nyx htools + sharedir for OS Fuzzing", "Getting Started with Windows Fuzzing", "\ud83d\udcd7 kAFL\u2019s Documentation", "Deployment", "kAFL/Nyx Hypercall API", "kAFL User Interface", "kAFL Workdir", "Fuzzing the Linux Kernel", "Installation", "Introduction"], "terms": {"The": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10], "project": [0, 4, 5], "": [0, 2, 3, 5, 7, 9, 10], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "host": [0, 1, 2, 3, 5, 6, 8, 9], "onlin": 0, "To": [0, 1, 2, 3, 8, 10], "doc": 0, "local": [0, 1, 2, 5, 10, 11], "cd": [0, 1, 2, 9, 10], "make": [0, 1, 2, 4, 5, 6, 9], "html": 0, "xdg": 0, "open": 0, "index": 0, "base": [1, 5, 7], "legaci": [1, 3], "kafl": [1, 2, 3, 9, 11], "guid": [1, 3, 4, 11], "run": [1, 2, 3, 4, 5, 8, 9, 10], "newer": [1, 6, 10], "distribut": [1, 5], "mai": [1, 2, 3, 6, 8, 9], "requir": [1, 2, 4, 5, 9], "minor": 1, "fix": [1, 2, 3, 5], "provid": [1, 2, 9], "sampl": [1, 2], "code": [1, 2, 4, 6, 8, 9], "For": [1, 2, 3, 4, 6, 9], "follow": [1, 3, 4, 10], "step": [1, 3, 4, 8, 10], "download": [1, 2, 3, 4, 5, 10], "ubuntu": [1, 2, 3, 10], "16": [1, 7, 9], "04": [1, 2, 3, 10], "iso": [1, 3], "last": [1, 7], "verifi": [1, 4], "work": [1, 2, 3, 5, 8, 9], "version": [1, 2, 5, 6], "wget": 1, "c": [1, 2, 3, 6, 9], "o": [1, 4, 7, 8, 9], "http": [1, 5, 9, 10], "releas": [1, 5, 6, 7], "com": [1, 4, 5, 9, 10], "7": [1, 7, 9], "server": [1, 3, 9], "amd64": 1, "creat": [1, 3, 6, 8, 10], "qemu": [1, 2, 3, 4, 5, 6, 7, 8, 9], "hard": [1, 3, 8], "drive": [1, 3], "img": [1, 3], "f": [1, 3, 7], "qcow2": [1, 2, 3], "20g": 1, "machin": [1, 3, 5, 9, 10, 11], "q35": [1, 3], "enabl": [1, 3, 6, 9], "kvm": [1, 3, 4, 5, 9], "m": [1, 3, 9], "1024": [1, 3], "hda": [1, 3], "cdrom": [1, 3], "insid": [1, 2, 10], "guest": [1, 2, 4, 5, 6, 8, 9], "clone": [1, 4, 5, 9], "repositori": [1, 4, 5, 10], "agent": [1, 2, 3, 6, 9, 11], "git": [1, 5, 9, 10], "github": [1, 5, 9, 10], "intellab": [1, 4, 9, 10], "sh": [1, 2, 3, 8, 10], "target": [1, 2, 3, 4, 6, 8, 10, 11], "perform": [1, 2, 5, 6, 7, 8, 9], "ani": [1, 2, 4, 6, 8, 9, 10], "other": [1, 2, 3, 4, 5, 6, 8, 9], "setup": [1, 2, 5, 7, 9, 10, 11], "up": [1, 7, 8], "updat": [1, 2, 5], "grub": [1, 2, 5], "spectre_v2": [1, 2], "off": [1, 2, 9], "mitig": [1, 2, 9], "nopti": [1, 2, 9], "oop": [1, 2, 9], "panic": [1, 2, 6, 7, 9], "nokaslr": [1, 2, 9], "consol": [1, 2, 3], "ttys0": [1, 2], "sudo": [1, 2, 3, 9, 10], "sysctl": 1, "kernel": [1, 2, 4, 5, 10, 11], "randomize_va_spac": 1, "0": [1, 3, 7, 9], "shutdown": [1, 3], "gener": [1, 3, 4, 6], "directli": [1, 2, 3, 5, 9], "desir": [1, 4, 5], "hierarchi": 1, "help": [1, 9], "result": [1, 2, 6, 8, 9, 11], "smaller": 1, "footprint": 1, "snippet": 1, "minim": [1, 2, 4, 6], "root": [1, 2, 9, 10, 11], "us": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11], "debootstrap": 1, "hello": [1, 2, 9], "world": [1, 2, 9], "kafl_vuln_test": [1, 2], "test": [1, 2, 3, 6, 8, 10], "case": [1, 5, 6, 9], "tend": [1, 8], "have": [1, 2, 3, 5, 6, 10, 11], "similar": 1, "tool": [1, 2, 5, 8, 9, 10], "e": [1, 2, 6, 7, 8], "g": [1, 2, 6, 7, 8], "febootstrap": 1, "fedora": 1, "you": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "can": [1, 2, 3, 5, 6, 7, 8, 9, 10], "also": [1, 2, 6, 7, 8, 9], "busybox": 1, "further": [1, 2, 4], "reduc": 1, "memori": [1, 3, 9], "your": [1, 2, 3, 4, 5, 7, 10, 11], "har": [1, 2, 6, 8, 9], "rootf": 1, "realpath": 1, "ubuntu_16": 1, "mkdir": [1, 2, 3], "p": [1, 2, 7, 9], "arch": [1, 9], "variant": 1, "minbas": 1, "includ": [1, 2, 5], "vim": 1, "ssh": 1, "xenial": 1, "archiv": [1, 7], "deploi": [1, 4, 5], "loader": [1, 3], "we": [1, 2, 3, 5, 6, 9, 10, 11], "current": [1, 2, 3, 5, 6, 7, 8, 10], "here": [1, 2, 3, 8], "so": [1, 3, 6], "don": 1, "t": [1, 3, 5, 9, 10], "worri": 1, "about": [1, 6], "cross": [1, 2, 9], "compil": [1, 2, 3, 9], "port": [1, 4], "compon": [1, 2, 5], "choic": 1, "lib": 1, "modul": [1, 2], "cp": [1, 2, 3, 9], "unam": 1, "r": [1, 7, 9], "boot": [1, 2, 9], "fuzzer": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11], "depend": [1, 5, 9], "linux_x86_64": [1, 2], "bin": [1, 2, 3, 9], "pushd": 1, "test_cas": [1, 2], "simpl": [1, 2, 9], "linux_x86": [1, 2], "64": [1, 2, 6, 7], "ko": [1, 2], "popd": 1, "launch": [1, 3, 7, 9], "tee": [1, 2], "etc": [1, 2, 5, 6, 9], "rc": 1, "modprob": [1, 2, 3], "loop": [1, 2, 6, 9], "vfat": 1, "insmod": 1, "set": [1, 2, 4, 5, 6, 8], "password": [1, 10], "easi": [1, 4, 5], "login": [1, 3], "debug": [1, 3, 6, 8], "chroot": 1, "passwd": 1, "wrap": 1, "time": [1, 2, 6, 7, 8], "need": [1, 2, 3, 5, 6], "aggreg": [1, 8], "regular": [1, 2, 6, 7, 8], "file": [1, 2, 3, 5, 6, 7, 8, 9, 10], "mkf": 1, "ext4": 1, "l": [1, 7, 9], "n": [1, 2, 7, 8, 10], "d": [1, 2, 9], "2g": 1, "convert": [1, 5], "raw": 1, "note": [1, 3, 8], "thi": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "wai": [1, 2, 3, 5], "doe": [1, 2, 3, 8, 9], "bootload": 1, "initrd": 1, "sinc": [1, 3, 5, 6, 7, 9], "ha": [1, 2, 5, 7, 9, 10], "been": [1, 7, 10, 11], "proce": 1, "creation": 1, "final": 1, "configur": [1, 2, 4, 6], "when": [1, 2, 5, 6, 8, 9], "must": [1, 2, 6, 10], "ident": 1, "one": [1, 3, 8], "restor": [1, 6, 9], "later": 1, "dure": [1, 8, 9], "adjust": [1, 7], "ram": [1, 7, 8], "size": [1, 6, 7], "type": [1, 5, 6, 7], "peripher": 1, "avail": [1, 5, 7, 9, 10], "even": [1, 2], "thing": [1, 9], "like": [1, 3, 4, 5, 6], "miss": 1, "commandlin": [1, 8], "incompat": 1, "against": 1, "report": [1, 6, 7, 9], "log": [1, 2, 3, 6, 8, 9], "kafl_fuzz": [1, 2, 3, 8, 9, 10], "py": [1, 2, 3, 7, 8, 9, 10], "v": [1, 3, 7], "an": [1, 2, 4, 5, 6, 7, 8, 9], "overlai": [1, 3], "copi": [1, 3, 8], "multipl": [1, 4, 9], "instanc": [1, 2, 4, 8, 9], "parallel": [1, 4, 9], "b": [1, 3, 9], "overlay_0": [1, 3], "execut": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "initi": [1, 2, 6, 8, 9], "If": [1, 2, 5, 10], "path": [1, 3, 5, 7, 8, 9, 10], "abov": [1, 9], "snip": 1, "correspond": [1, 2, 3, 6, 8], "direct": 1, "automat": [1, 2, 6], "5": [1, 3, 4, 5, 7], "x86_64": [1, 3, 9], "softmmu": [1, 3, 9], "system": [1, 2, 3, 4, 9, 10], "nograph": 1, "net": [1, 3, 9], "none": [1, 3, 9], "serial": [1, 2, 8, 9], "mon": 1, "stdio": 1, "vmlinuz": 1, "512": [1, 2, 9], "append": [1, 9], "dev": [1, 2, 3, 5, 8, 9], "sda": 1, "rw": [1, 9], "wa": [1, 2, 5], "info": [1, 2, 3, 6, 7, 8, 9], "seq": 1, "nproc": [1, 9], "do": [1, 3, 9], "overlay_": 1, "done": [1, 2, 3, 6, 7], "virtual": [1, 5, 6, 9], "address": [1, 2, 6], "rang": [1, 2, 6, 9], "trace": [1, 2, 6, 8, 9, 10], "coverag": [1, 4, 7, 8, 9], "feedback": [1, 4, 6, 7, 8], "It": [1, 3, 4, 5, 6, 8, 9], "recommend": [1, 2, 8], "specif": [1, 6], "subsystem": 1, "want": [1, 3, 5, 10], "order": [1, 4], "nois": 1, "schedul": [1, 4, 7], "interrupt": 1, "obtain": [1, 6, 7], "driver": [1, 2], "kafl_info": [1, 3], "script": [1, 3, 8], "feed": 1, "binari": [1, 2, 3, 6, 10], "where": [1, 3, 5, 6], "scan": [1, 9], "output": [1, 2, 3, 8, 9], "all": [1, 2, 4, 5, 7, 10], "purg": [1, 2, 3, 8, 9], "vm_dir": [1, 3], "mem": [1, 2, 3], "work_dir": [1, 2, 3, 6, 8], "exampl": [1, 2, 4, 5, 9], "0xffffffffc0022000": 1, "0xffffffffc0042000": 1, "psmous": 1, "0xffffffffc0010000": 1, "0xffffffffc001a000": 1, "ahci": 1, "0xffffffffc0002000": 1, "0xffffffffc000a000": 1, "0xffffffff81000000": 1, "0xffffffff81a4aea0": 1, "core": 1, "pt": [1, 3, 4, 6, 7, 8, 9, 10], "filter": [1, 2, 6, 9], "seed": [1, 2, 3, 7, 8], "echo": [1, 2, 3, 10], "abcdefg1234567890": 1, "seed_dir": [1, 2, 3, 9], "ip0": [1, 3, 9], "view": [1, 8], "progress": [1, 7], "troubleshoot": 1, "sens": 1, "dir": [1, 7, 8], "continu": [1, 6, 10], "main": [1, 2, 4, 8, 10], "tbd": 1, "see": [1, 3, 5, 7, 8, 10], "readm": 1, "md": 1, "window": [1, 7], "option": [2, 3, 4, 5, 9], "replac": 2, "v0": [2, 5], "2": [2, 4, 7], "old": [2, 7], "singl": [2, 6], "kind": [2, 6], "fanci": 2, "packag": [2, 5], "approach": [2, 6], "With": [2, 5], "shell": [2, 5, 10], "which": [2, 3, 4, 6, 7, 8, 9], "turn": 2, "load": [2, 9], "addit": [2, 5, 7, 8, 9], "via": [2, 5, 7], "hypercal": [2, 4, 7], "transpar": 2, "todo": 2, "ar": [2, 3, 5, 6, 7, 8, 9, 10], "integr": [2, 4, 8], "sourc": [2, 4, 5, 9], "separ": [2, 9], "from": [2, 3, 4, 5, 6, 8, 9, 10, 11], "packer": 2, "avoid": [2, 8], "frequent": [2, 7, 8], "modif": [2, 4, 10], "purpos": [2, 3], "second": [2, 7], "stage": [2, 7], "dub": 2, "below": 2, "actual": [2, 3, 6, 10], "non": [2, 7, 8], "patch": [2, 4], "recent": [2, 10], "most": [2, 3, 9], "20": [2, 3, 7, 9, 10], "consid": 2, "same": [2, 5, 9], "problem": [2, 3], "activ": [2, 7, 9], "disabl": [2, 6, 9], "kaslr": 2, "pti": 2, "default": [2, 3, 5, 8], "grub_cmdline_linux_default": 2, "grub_cmdline_linux": 2, "grub_timeout_styl": 2, "menu": 2, "grub_timeout": 2, "1": [2, 3, 4, 7], "grub_disable_recoveri": 2, "true": 2, "mount": [2, 3], "bash": 2, "nbd": [2, 3], "nbd0": [2, 3], "nbd0p1": 2, "mnt": [2, 3], "hget": 2, "chmod": 2, "x": [2, 7], "reboot": [2, 5, 9, 10], "manual": [2, 3, 6], "snapshot": [2, 4, 6, 8, 9], "lock": [2, 6, 8], "still": [2, 8], "some": [2, 5, 8, 9, 10], "instead": [2, 3, 6, 9], "cron": 2, "sure": [2, 9, 10], "instal": [2, 3, 4, 5, 9, 11], "crontab": 2, "unount": 2, "disconnect": [2, 3], "import": [2, 8], "umount": [2, 3], "vulner": 2, "hprintf_test": 2, "review": 2, "understand": [2, 9, 11], "startup": [2, 6, 8, 9], "flow": 2, "secret": 2, "ingredi": 2, "issu": [2, 4, 6], "fetch": [2, 6], "store": [2, 6, 8], "runtim": [2, 4, 7], "select": [2, 5, 7], "ip": [2, 6], "reason": [2, 5], "decod": [2, 4, 6, 8, 9], "while": [2, 6], "possibl": [2, 3, 5, 9], "suppli": [2, 6, 8], "paramet": [2, 3, 5], "part": [2, 3, 6], "combin": [2, 6], "hinfo": 2, "hrang": 2, "accomplish": 2, "origin": 2, "simpli": [2, 6], "dump": [2, 6, 8, 9], "take": [2, 6], "list": [2, 3, 5], "them": [2, 5, 8], "A": [2, 5, 7], "seen": [2, 7], "stdout": 2, "redirect": 2, "hcat": 2, "grep": [2, 10], "pipe": 2, "kafl_vuln": 2, "awk": 2, "print": [2, 6], "nr": 2, "xarg": 2, "usag": [2, 4, 7], "custom": [2, 4, 6], "python3": 2, "redqueen": [2, 4, 7, 8, 9], "vm_imag": 2, "shm": [2, 8, 9], "kafl_ubuntu": 2, "By": [2, 8], "now": [2, 3, 6, 10], "workdir": [2, 4, 7, 9], "qemu_serial_": 2, "ampl": 2, "frontend": [2, 4, 5, 6], "hprintf": [2, 6, 8, 9], "send": [2, 6], "printf": [2, 6], "string": [2, 5, 6], "python": [2, 4, 8, 10], "immedi": 2, "messag": [2, 10], "togeth": 2, "switch": [2, 3], "more": [2, 4, 6, 8], "verbos": [2, 5], "At": [2, 3, 11], "point": [2, 3, 6, 8, 9, 10], "unpatch": 2, "special": [2, 3, 6, 8], "mode": 2, "exit": [2, 6, 8, 9], "error": [2, 3, 6, 9], "intend": 2, "baselin": 2, "bootstrap": [2, 6, 9], "differ": [2, 3, 9], "scenario": [2, 4], "outsid": 2, "environ": [2, 4, 5, 8], "own": [2, 5], "extract": [2, 4], "function": [2, 6, 9], "hook": 2, "In": [2, 3, 5, 6, 9, 10], "particular": [2, 4, 9], "typic": [2, 4, 6, 8], "fail": [2, 3], "enough": 2, "just": [2, 3, 10], "complex": 2, "static": 2, "link": 2, "librari": [2, 3, 4], "encount": 2, "first": [2, 3, 6, 8, 9, 10], "next_payload": [2, 6], "mean": [2, 3, 6, 8], "okai": 2, "longer": 2, "phase": [2, 9], "befor": [2, 6, 10], "start": [2, 4, 6, 7, 10], "onli": [2, 3, 5, 6, 8], "after": [2, 3, 5], "resum": [2, 6, 8, 9], "statu": [2, 7, 8], "its": 2, "wait": [2, 9], "state": [2, 8, 9], "due": [2, 8, 9], "bootup": 2, "ll": 3, "2019": 3, "evalu": [3, 8], "17763": 3, "737": 3, "190906": 3, "2324": 3, "rs5_release_svc_refresh_server_eval_x64fre_en": 3, "us_1": 3, "50g": 3, "everyth": 3, "seem": [3, 9], "nat": 3, "network": 3, "give": 3, "access": 3, "well": [3, 4], "internet": 3, "move": [3, 10], "anywher": 3, "els": [3, 10], "correct": 3, "directori": [3, 5, 9, 10], "windows_x86_64": 3, "ex": 3, "build": [3, 4, 5, 8, 10], "mingw": 3, "suggest": 3, "disk": [3, 8], "connect": 3, "sleep": 3, "nbd0p2": 3, "rmdir": 3, "without": [3, 9, 10], "should": [3, 10, 11], "eventu": 3, "shut": 3, "down": [3, 7], "probabl": [3, 7], "freez": 3, "desktop": 3, "manag": [3, 5, 8], "ctrl": 3, "alt": 3, "f3": 3, "killal": 3, "9": [3, 7, 9], "back": 3, "f1": 3, "check": [3, 4, 5, 10], "congratz": 3, "readi": [3, 8], "next": [3, 4, 6, 10], "payload": [3, 6, 7, 8, 9], "fed": 3, "map": 3, "pass": [3, 5], "0xfffff801ecf00000": 3, "0xfffff801ecf18000": 3, "lltdio": 3, "sy": 3, "0xfffff801ecf20000": 3, "0xfffff801ecf3b000": 3, "rspndr": 3, "0xfffff801ecf40000": 3, "0xfffff801ecf65000": 3, "bowser": 3, "0xfffff801ecf70000": 3, "0xfffff801ecf8a000": 3, "mpsdrv": 3, "find": [3, 7, 9, 11], "rememb": 3, "two": 3, "As": [3, 5], "consequ": 3, "occur": 3, "exist": [3, 6, 8, 9], "ini": 3, "absolut": 3, "preffer": 3, "fatal": [3, 6], "pleas": [3, 4], "errno": 3, "104": 3, "reset": [3, 4], "peer": 3, "usual": 3, "mismatch": 3, "command": [3, 5, 10], "again": 3, "argument": [3, 5, 8], "ad": [3, 5, 6, 7], "afterward": 3, "cpu": [3, 7, 9, 10], "anoth": 3, "forgot": 3, "hang": [3, 6], "pci": [3, 9], "devic": [3, 5, 9], "0123456789abcdef": 3, "modifi": [3, 4], "src": 3, "vuln_test": 3, "chang": [3, 10], "call": [3, 9], "properli": [3, 10], "0xfffff801ec850000": 3, "0xfffff801ec915000": 3, "add": 3, "too": 3, "kafl_gui": [3, 7, 8, 9], "observ": 3, "nyx": [4, 8, 9], "fast": [4, 9], "x86": [4, 9], "vm": [4, 6, 9, 10], "great": 4, "anyth": [4, 10], "firmwar": 4, "full": 4, "blown": 4, "oper": 4, "intel": [4, 5, 10], "vt": 4, "pml": 4, "achiev": [4, 5], "effici": 4, "greybox": 4, "whitebox": 4, "fuzz": [4, 6, 7, 10, 11], "allow": [4, 10], "mani": [4, 8], "fw": 4, "toolchain": [4, 10], "written": 4, "design": 4, "afl": 4, "extend": [4, 6], "mutat": [4, 7], "analysi": [4, 8], "radamsa": [4, 5, 7, 8, 9], "grimoir": [4, 7, 9], "extens": 4, "introspect": 4, "input": [4, 6, 7, 8, 9], "condit": 4, "instruct": 4, "overcom": 4, "magic": 4, "byte": [4, 7], "attempt": [4, 9], "identifi": 4, "keyword": [4, 5], "syntax": 4, "clever": 4, "larg": [4, 6], "scale": 4, "detail": [4, 7], "ijon": [4, 8], "visit": 4, "structur": 4, "around": [4, 5], "organis": 4, "subcompon": 4, "linux": [4, 5, 10, 11], "support": [4, 6, 8, 10], "libxdc": [4, 5, 6], "introduct": 4, "3": [4, 7], "4": [4, 7], "env": [4, 5, 8], "prefer": [4, 6], "known": [4, 6], "deploy": [4, 8, 10], "makefil": 4, "ansibl": [4, 10], "tag": [4, 8], "galaxi": 4, "compos": 4, "api": 4, "essenti": [4, 5, 10], "untest": 4, "fulli": 4, "convent": 4, "user": [4, 5, 9, 10, 11], "interfac": [4, 6, 9, 11], "gui": 4, "built": [5, 9], "IT": 5, "autom": 5, "framework": 5, "cloud": 5, "servic": 5, "provis": 5, "expect": [5, 8, 9], "inventori": 5, "remot": 5, "document": [5, 9, 10, 11], "level": [5, 6, 7, 9], "made": [5, 10], "playbook": 5, "compat": [5, 10], "necessari": [5, 10], "new": [5, 7, 10], "10": [5, 7, 9], "73": 5, "ensur": 5, "group": 5, "permiss": 5, "descript": 5, "accord": 5, "Will": 5, "localhost": 5, "enter": [5, 9, 10], "sub": [5, 10], "variabl": [5, 8, 10], "clean": 5, "remov": 5, "virtualenv": 5, "venv": 5, "forc": 5, "pull": 5, "everi": 5, "develop": [5, 8], "orient": 5, "rebuild": 5, "accept": 5, "line": 5, "specifi": 5, "end": [5, 11], "symbol": 5, "doubl": 5, "dash": 5, "These": 5, "underli": 5, "toggl": 5, "3rd": 5, "vvv": 5, "skip": [5, 10], "hardware_check": 5, "hardare_check": 5, "hack": 5, "quot": 5, "doesn": [5, 10], "extra": 5, "var": 5, "ansible_connect": 5, "fine": 5, "grain": 5, "control": [5, 6], "thei": [5, 8, 9], "featur": [5, 10], "describ": 5, "previous": [5, 6, 8, 9], "task": [5, 6, 7], "capston": 5, "hardwar": 5, "introduc": [5, 10, 11], "ci": 5, "kvm_devic": 5, "relat": [5, 8], "node": [5, 7], "reboot_kernel": 5, "respons": 5, "update_grub": 5, "entri": [5, 8], "One": [5, 6], "rewrit": [5, 6, 9], "scratch": 5, "better": [5, 8, 11], "fact": [5, 10], "ccc": 5, "harden": 5, "repo": 5, "And": 5, "commun": [5, 8], "cherri": 5, "pick": 5, "goal": 5, "mind": 5, "leverag": 5, "power": 5, "breakdown": 5, "modular": 5, "role": 5, "reusabl": 5, "regroup": 5, "each": [5, 7, 8, 9], "out": [5, 7, 9], "share": [5, 6, 8], "top": 5, "hand": 5, "subfold": 5, "yet": [5, 8], "publicli": 5, "websit": 5, "referenc": 5, "yml": 5, "name": [5, 6], "master": 5, "coordin": 6, "offer": [6, 9], "low": [6, 9], "inject": [6, 9], "acquir": 6, "collect": 6, "mark": 6, "stop": 6, "handshak": 6, "reach": 6, "return": [6, 7], "ok": 6, "backend": 6, "get_payload": 6, "get": [6, 9], "tell": 6, "write": [6, 8], "care": 6, "alloc": 6, "suffici": [6, 9], "buffer": 6, "page": [6, 8], "align": 6, "mmap": 6, "trigger": [6, 10], "regist": 6, "invoc": 6, "our": [6, 11], "alwai": 6, "anymor": 6, "pointer": 6, "veri": [6, 7], "forward": 6, "sanit": 6, "except": 6, "stack": 6, "kasan": [6, 7, 8], "rais": 6, "crash": [6, 7, 8, 9], "event": 6, "reload": [6, 8], "submit_pan": 6, "submit_kasan": 6, "handler": 6, "overwrit": 6, "detect": [6, 9], "side": [6, 8], "unexpect": [6, 9], "inlin": 6, "macro": 6, "often": 6, "flexibl": 6, "place": [6, 9], "range_submit": 6, "easier": 6, "overrid": [6, 8], "ipn": 6, "submit_cr3": 6, "cr3": 6, "valu": [6, 8], "limit": 6, "context": 6, "user_abort": 6, "signal": 6, "mainli": [6, 8, 9], "assert": [6, 9], "perspect": 6, "auto": [6, 9], "user_submit_mod": 6, "explicitli": 6, "32": [6, 7, 9], "bit": [6, 7, 9], "influenc": 6, "possibli": 6, "set_agent_config": 6, "capabl": 6, "get_host_config": 6, "queri": 6, "req_stream_data": 6, "data": 6, "correspondingli": 6, "sharedir": [6, 9], "folder": [6, 8], "dump_fil": 6, "null": 6, "valid": [6, 9], "mkstemp": 6, "templat": 6, "filenam": 6, "let": [6, 10], "uniqu": [6, 7], "user_fast_acquir": 6, "save": 6, "usermod": 6, "printk_addr": 6, "submit": 6, "printk": 6, "interpret": [6, 9, 10], "arg": 6, "panic_extend": [6, 7], "mix": [6, 8], "bug": [6, 11], "create_tmp_snapshot": 6, "increment": 6, "posit": 6, "debug_tmp_snapshot": 6, "nested_": 6, "roughli": 6, "equival": 6, "nest": 6, "l2": 6, "user_range_advis": 6, "get_argv": 6, "idea": 6, "get_program": 6, "deprec": 6, "render": 7, "variou": [7, 8, 9], "metadata": [7, 8], "curs": 7, "text": 7, "ui": 7, "quick": 7, "overview": 7, "campaign": [7, 8], "averag": 7, "grand": 7, "2h00m": 7, "exec": [7, 8, 9], "26": 7, "0m": 7, "stabil": 7, "worker": [7, 8, 9], "72": 7, "curexec": 7, "4018": 7, "funki": [7, 8], "est": 7, "74": 7, "avgexec": 7, "3616": 7, "timeout": [7, 8], "bitmap": [7, 8], "total": 7, "141": 7, "1h57m": 7, "45": 7, "edg": [7, 9], "11": [7, 9], "1k": 7, "addsan": 7, "fav": [7, 9], "18": [7, 9], "block": 7, "21": [7, 9], "2k": 7, "13m15": 7, "norm": 7, "123": 7, "col": 7, "8": [7, 9], "3m27": 7, "yld": 7, "init": 7, "38": 7, "grim": 7, "redq": 7, "6": [7, 9, 10], "det": 7, "hvc": 7, "66": 7, "rq": 7, "gr": 7, "fin": 7, "12": [7, 9], "nrm": 7, "120": 7, "afl_splic": 7, "140": 7, "lvl": 7, "399": 7, "afl_havoc": 7, "97": 7, "395": [7, 9], "afl_flip_2": 7, "96": 7, "400": 7, "106": 7, "371": 7, "85": 7, "243": 7, "103": 7, "244": 7, "58": 7, "245": 7, "62": 7, "25": 7, "242": 7, "50": 7, "153": 7, "233": 7, "84": 7, "99": 7, "30": 7, "239": 7, "13": [7, 9], "241": 7, "14": [7, 9], "146": 7, "27": 7, "240": 7, "15": [7, 9], "afl_arith_2": 7, "id": [7, 9], "0kb": [7, 9], "perf": 7, "75m": 7, "score": 7, "0h02m": 7, "0x0000000": 7, "17": [7, 9], "9d": 7, "e4": 7, "47": 7, "90": 7, "f5": 7, "52": 7, "61": 7, "59": 7, "7c": 7, "dd": 7, "ac": 7, "8e": 7, "rai": 7, "0x0000010": 7, "8c": 7, "86": 7, "b0": 7, "92": 7, "77": 7, "fb": 7, "28": 7, "f0": 7, "4c": 7, "f7": 7, "23": 7, "49": 7, "75": 7, "94": 7, "w": [7, 9], "iu": 7, "0x0000020": 7, "d5": 7, "76": 7, "1b": 7, "5b": 7, "9e": 7, "e7": 7, "c6": 7, "91": 7, "51": 7, "6d": 7, "35": [7, 9], "40": 7, "qm5": 7, "0x0000030": 7, "80": 7, "8d": 7, "1a": 7, "fe": 7, "b4": 7, "22": [7, 9], "a0": 7, "a4": 7, "89": 7, "4f": 7, "0x0000040": 7, "ef": 7, "ea": 7, "6a": 7, "b2": 7, "7a": 7, "bc": 7, "fa": 7, "79": [7, 9], "f9": 7, "d1": 7, "da": 7, "j": [7, 9], "z": 7, "y": 7, "0x0000050": 7, "3b": 7, "63": 7, "93": 7, "1e": 7, "c7": 7, "41": 7, "xcy": 7, "0x0000060": 7, "cb": 7, "1f": 7, "df": 7, "3a": 7, "98": [7, 9], "31": 7, "37": 7, "34": 7, "q": [7, 10], "170141": 7, "0x0000070": 7, "33": 7, "36": [7, 9], "39": 7, "1834604692317316": 7, "0x0000080": 7, "83": 7, "60": 7, "c0": 7, "68": 7, "87303": 7, "h": 7, "0x0000090": 7, "f4": 7, "70": 7, "00": [7, 9], "71": 7, "46": 7, "fq": 7, "0x00000a0": 7, "f2": 7, "cf": 7, "1d": 7, "81": 7, "2c": 7, "f6": 7, "3e": 7, "5e": 7, "67": 7, "split": 7, "increasingli": 7, "indic": 7, "elaps": 7, "estim": 7, "rough": 7, "number": 7, "sum": 7, "per": 7, "overal": [7, 11], "fraction": 7, "watch": 7, "shallow": 7, "determinist": [7, 8], "vcpu": 7, "queue": 7, "learn": 7, "kickstart": [7, 9], "favorit": 7, "normal": 7, "transit": 7, "discov": [7, 8], "basic": 7, "tracer": 7, "hash": [7, 8], "collis": 7, "intercept": 7, "yield": 7, "found": 7, "individu": 7, "havoc": 7, "respect": 7, "iter": 7, "through": 7, "travers": 7, "lower": 7, "prioriti": 7, "compar": 7, "speed": 7, "assign": 7, "process": [7, 8, 9, 10, 11], "accumul": 8, "primari": 8, "locat": 8, "inspect": 8, "previou": 8, "session": 8, "post": 8, "triag": 8, "defin": [8, 9], "kafl_workdir": [8, 9], "rather": 8, "than": 8, "helper": 8, "unnecessari": 8, "prototyp": 8, "keep": 8, "entir": 8, "perman": 8, "popul": 8, "sever": [8, 9], "safeti": 8, "opposit": 8, "effect": 8, "delet": 8, "itself": 8, "corpus": [8, 9], "program": 8, "intern": 8, "ipc": 8, "sort": 8, "relev": 8, "mcat": 8, "msgpack": 8, "encod": 8, "tree": 8, "kafl_plot": 8, "gnuplot": 8, "config": [8, 9], "stat": 8, "csv": 8, "over": 8, "tabl": 8, "worker_stats_n": 8, "hprintf_nn": 8, "serial_nn": 8, "excerpt": 8, "irregular": 8, "crash_xxxxxx": 8, "truncat": 8, "kasan_xxxxxx": 8, "timeo_xxxxxx": 8, "upload": 8, "hypercall_kafl_dump_fil": 8, "kafl_cov": [8, 9], "corpu": [8, 9], "payload_aaaaa": 8, "hypercall_kafl_pan": 8, "payload_bbbbb": 8, "hypercall_kafl_kasan": 8, "payload_ccccc": 8, "hypercall_kafl_releas": 8, "payload_ddddd": 8, "catch": 8, "meta": 8, "node_aaaaa": 8, "node_bbbbb": 8, "node_ccccc": 8, "node_ddddd": 8, "interest": [8, 9], "kafl_socket": 8, "socket": [8, 9], "between": 8, "interface_n": 8, "payload_n": 8, "aux_buffer_n": 8, "aux_buff": 8, "bitmap_n": 8, "ijon_n": 8, "radamsa_n": 8, "redqueen_workdir_n": 8, "page_cach": [8, 9], "addr": 8, "cach": 8, "global": 8, "main_crash_bitmap": 8, "main_kasan_bitmap": 8, "main_normal_bitmap": 8, "main_timeout_bitmap": 8, "fast_snapshot": 8, "mem_dump": 8, "mem_meta": 8, "qemu_st": 8, "fs_cach": 8, "txt": [8, 9], "show": 9, "how": [9, 11], "implement": 9, "userspac": [9, 10], "benefit": 9, "filesystem": 9, "silli": 9, "tdx": 9, "mmio": 9, "pio": 9, "read": 9, "virtio": 9, "branch": 9, "examples_root": 9, "depth": 9, "apt": 9, "gawk": 9, "bison": 9, "flex": 9, "openssl": 9, "libssl": 9, "libelf": 9, "lz4": 9, "dwarv": 9, "vanilla": 9, "kafl_config_fil": 9, "kafl_config": 9, "yaml": 9, "bzimag": 9, "01": 9, "__": [9, 10], "___": [9, 10], "________": [9, 10], "_____": [9, 10], "_________": [9, 10], "____": [9, 10], "_": [9, 10], "warn": 9, "No": 9, "region": 9, "pend": 9, "home": 9, "kafl64": 9, "v1": 9, "hypervisor": 9, "vmx": 9, "displai": [9, 10], "netdev": 9, "mynet0": 9, "chardev": 9, "nowait": 9, "nyx_socket": 9, "interface_0": 9, "worker_id": 9, "bitmap_s": 9, "65536": 9, "input_buffer_s": 9, "131072": 9, "isa": 9, "kafl_seri": 9, "mux": 9, "serial_00": 9, "vda1": 9, "fast_vm_reload": 9, "invalid": 9, "02": 9, "got": 9, "5637": 9, "56msec": 9, "2kb": 9, "261": 9, "605": 9, "743": 9, "55msec": 9, "2298": 9, "2785": 9, "20msec": 9, "576": 9, "62msec": 9, "644": 9, "2072": 9, "99msec": 9, "03": 9, "52msec": 9, "19": 9, "49msec": 9, "25msec": 9, "42": 9, "3502": 9, "80msec": 9, "k": 9, "8667": 9, "15msec": 9, "calibr": 9, "1516": 9, "796": 9, "27msec": 9, "19msec": 9, "61msec": 9, "636": 9, "1132": 9, "54msec": 9, "trim": 9, "272": 9, "50msec": 9, "26msec": 9, "81msec": 9, "247": 9, "41msec": 9, "670": 9, "44msec": 9, "1kb": 9, "trim_cent": 9, "look": 9, "Be": 9, "hint": 9, "termin": 9, "what": 9, "imag": 9, "kafl_hprintf": 9, "try": 9, "hprintf_00": 9, "Then": 9, "replai": 9, "faithfulli": 9, "ptdump": 9, "big": 9, "ffffffff81000000": 9, "ffffffff83603000": 9, "ip1": 9, "ffffffff855ed000": 9, "ffffffff856e4000": 9, "abort": [9, 10], "finish": 9, "never": 9, "happen": 9, "consum": 9, "op": 9, "did": 9, "libxdc_decode_error": 9, "dynam": 9, "paravirtu": 9, "ftrace": 9, "jump": 9, "label": 9, "xyz": 9, "especi": 9, "emul": 9, "caus": [9, 11], "leak": 9, "dive": 10, "meet": 10, "processor": 10, "gen": 10, "skylak": 10, "although": 10, "broadwel": 10, "addion": 10, "intel_pt": 10, "proc": 10, "cpuinfo": 10, "fi": 10, "gcc": 10, "workflow": 10, "debian": 10, "bullsey": 10, "contain": 10, "might": 10, "glimps": 10, "touch": 10, "dry": 10, "prompt": 10, "press": 10, "onc": 10, "confort": 10, "becom": 10, "passwordless": 10, "nopasswd": 10, "sudoer": 10, "complet": 10, "newli": 10, "acsii": 10, "art": 10, "logo": 10, "regard": 10, "refer": [10, 11], "tutori": 11, "real": 11, "throughout": 11, "analyz": 11, "abl": 11, "few": 11, "adapt": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"build": [0, 1, 9], "document": [0, 4], "get": [1, 3], "start": [1, 3, 9], "linux": [1, 2, 9], "fuzz": [1, 2, 3, 9], "prepar": [1, 2, 3], "vm": [1, 2, 3], "imag": [1, 2, 3], "option": [1, 6, 8], "1": [1, 9, 10], "full": 1, "instal": [1, 10], "manual": 1, "2": [1, 9, 10], "from": 1, "filesystem": 1, "autom": 1, "snapshot": [1, 3], "us": 2, "nyx": [2, 6], "htool": 2, "sharedir": 2, "o": 2, "creat": 2, "deploi": [2, 10], "loader": 2, "script": 2, "launch": 2, "note": 2, "window": 3, "base": 3, "obtain": 3, "driver": 3, "virtual": 3, "address": 3, "rang": 3, "troubleshoot": 3, "kafl": [4, 5, 6, 7, 8, 10], "": 4, "featur": 4, "compon": 4, "content": [4, 8], "tutori": 4, "refer": 4, "develop": 4, "deploy": 5, "system": 5, "modif": 5, "makefil": 5, "target": [5, 9], "extra_arg": 5, "ansibl": 5, "tag": 5, "galaxi": 5, "compos": 5, "intellab": 5, "collect": 5, "reus": 5, "hypercal": 6, "api": 6, "essenti": 6, "further": 6, "untest": 6, "fulli": 6, "integr": 6, "user": 7, "interfac": 7, "gui": 7, "workdir": 8, "usag": 8, "convent": 8, "configur": [8, 9], "detail": 8, "kernel": 9, "download": 9, "patch": 9, "port": 9, "your": 9, "prefer": 9, "3": [9, 10], "4": [9, 10], "next": 9, "step": 9, "5": [9, 10], "known": 9, "issu": 9, "requir": 10, "hardwar": 10, "softwar": 10, "clone": 10, "sourc": 10, "make": 10, "set": 10, "environ": 10, "env": 10, "verifi": 10, "introduct": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})