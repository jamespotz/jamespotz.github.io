---
path: "/blog/eos-zswap-zstd-z3fold"
date: "2019-10-05"
title: "Improving Elementary Os Performance using ZSWAP, zstd and z3fold"
tags: ["elementary-os", "zswap", "zstd", "z3fold"]
---

## Minimum Requirements

- Fast Cpu with 3 cores or more.
- Low Ram - 4gb or less

## ZSWAP

zswap is a Linux kernel feature that provides a compressed write-back cache for swapped pages, as a form of virtual memory compression. Instead of moving memory pages to a swap device when they are to be swapped out, zswap performs their compression and then stores them into a memory pool dynamically allocated in the system RAM. Later, writeback to the actual swap device is deferred or even completely avoided, resulting in a significantly reduced I/O for Linux systems that require swapping; the tradeoff is the need for additional CPU cycles to perform the compression.

ZSWAP allows linux to make more efficient use of RAM as it virtually increase memory capacity, rather than slightly increased CPU usage to compress / unzip the swap pages.

ZSWAP is present in the kernel but is never used, and to use it you must explicitly enable through `GRUB_CMDLINE_LINUX_DEFAULT` at `/etc/default/grub` file.

## Zstandard (zstd)

Zstandard is a real-time compression algorithm, providing high compression ratios. It offers a very wide range of compression / speed trade-off, while being backed by a very fast decoder (see benchmarks below). It also offers a special mode for small data, called dictionary compression, and can create dictionaries from any sample set. Zstandard library is provided as open source software using a BSD license.std stands for ZStandard develop by facebook.

[http://zstd.net](http://www.zstd.net/)

### Steps to enable ZSWAP

1. Edit grub as root

```shell
$ sudo nano /etc/default/grub
```

2. Edit `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"`

```shell
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash zswap.enabled=1 zswap.compressor=zstd zswap.zpool=z3fold"
```

3. Update grub

```shell
$ sudo update-grub
```

### Steps to install zstd and Z3fold

1. Install checkinstall and build-essential

```shell
$ sudo apt install checkinstall build-essential
```

2. You can install zstd from `sudo apt install zstd` but its not the latest version. To install the latest version follow the steps below.

```shell
$ sudo -s
$ cd /tmp
$ wget https://github.com/facebook/zstd/releases/download/v1.4.3/zstd-1.4.3.tar.gz -O zstd.tar.gz
$ tar -xf zstd.tar.gz
$ cd zstd-1.4.3
$ make
$ echo y | checkinstall
```

3. Edit file `/etc/initramfs-tools/modules`.

```shell
$ sudo nano /etc/initramfs-tools/modules
```

```text
# List of modules that you want to include in your initramfs.
# They will be loaded at boot time in the order below.
#
# Syntax:  module_name [args ...]
#
# You must run update-initramfs(8) to effect this change.
#
# Examples:
#
# raid1
# sd_mod
zstd
zstd_compress
z3fold
```

```shell
$ suod update-initramfs -u -k all
```

5. Restart PC and verify ZSWAP if enabled

```shell
$ cat /sys/module/zswap/parameters/enabled
$ Y
```

Response should show `Y`.

6. Verify ZSWAP if its using zstd and z3fold

```shell
$ sudo dmesg | grep -i zswap:
[    1.059997] zswap: loaded using pool zstd/z3fold
```
