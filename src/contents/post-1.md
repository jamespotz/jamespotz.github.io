---
path: "/blog/from-zsh-to-fish"
date: "2019-08-13"
title: "From ZSH to Fish Shell"
tags: ["shell", "bash", "zsh"]
---

## ZSH

The Z shell (Zsh) is a Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting. Zsh is an extended Bourne shell with a large number of improvements, including some features of Bash, ksh, and tcsh.

I love zsh I' ve been using the shell for a long time and my favorite theme is powerlevel10k. It was great and all but I wanted something differen something less of a hassle to configure and has autosuggestions and syntax highlighting built in.

## Fish

[https://fishshell.com/](https://fishshell.com/)

fish is a smart and user-friendly command line shell for Linux, and macOS. Fish has built in syntax highlighting and autosuggestions.

## How to install Fish

Ubuntu

```shell
$ sudo apt install fish
```

macOs

```shell
$ brew install fish
```

## To make fish your default shell

```shell
$ chsh -s /usr/bin/fish $USER
```

## Install Oh-My-Fish (OMF)

[https://github.com/oh-my-fish/oh-my-fish](https://github.com/oh-my-fish/oh-my-fish)

```shell
$ curl -L https://get.oh-my.fish | fish
```

## Theme (Starship)

[https://github.com/starship/starship](https://github.com/starship/starship)

You need to have rust setup to install starship

### Installing Rusht

```shell
$ curl https://sh.rustup.rs -sSf | sh
```

after install rust you can now install the theme

```shell
$ cargo install starship
```

To use the theme add to the end of `~/.config/omf/init.fish`

```bash
 eval (starship init fish)
```
