---
path: "/blog/install-docker-and-docker-compose-on-elementary-os"
date: "2019-09-01"
title: "Installing Docker and Docker Compose on Elementary Os Juno"
tags: ["elementary-os", "docker", "docker-compose"]
---

### What is Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.

### What is a Container?

A container allows developers to package up everything needed to run an application: code, runtime, system tools, system libraries and settings.

### Installing Docker

You can install docker from apt, but it will not be the latest release. If you have docker installed through apt-get uninstall them.

```shell
$ sudo apt remove docker docker-engine docker.io containerd runc
```

The contents of `/var/lib/docker/`, including existing images, containers, volumes are preserved.

#### Install using the repository

1. Add Docker's official GPG key:

```shell
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

2. Add the stable repo.

```shell
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

3. Update the apt package index and install the latest version of Docker Engine.

```shell
$ sudo apt update  && sudo apt-get install docker-ce docker-ce-cli containerd.io
```

4. Smoke test, it should download an image and print informational messages and exit.

```shell
$ sudo docker run hello-world
```

5. Installing Docker Compose

```shell
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
```

6. Permit the binary to be run

```shell
$ sudo chmo +x /usr/local/bin/docker-compose
```

### Optional Steps

#### Run docker without using sudo

```shell
$ sudo usermod -aG docker $USER
```

You must log out and log in back for this to take effect.
