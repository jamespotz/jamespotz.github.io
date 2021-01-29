---
path: "/blog/how-to-fix-wsl2-and-cisco-vpn"
date: "2020-09-27"
title: "How to fix WSL2 and Cisco Anyconnect VPN internet issue"
tags: ["windows", "wsl", "Today I learned", "vpn"]
---

## The problem

```shell
Err:1 http://archive.ubuntu.com/ubuntu focal InRelease
  Temporary failure resolving 'archive.ubuntu.com'
Err:2 http://security.ubuntu.com/ubuntu focal-security InRelease
  Temporary failure resolving 'security.ubuntu.com'
Err:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease
  Temporary failure resolving 'archive.ubuntu.com'
Err:4 http://archive.ubuntu.com/ubuntu focal-backports InRelease
  Temporary failure resolving 'archive.ubuntu.com'
Reading package lists... Done
W: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal/InRelease  Temporary failure   resolving 'archive.ubuntu.com'
W: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal-updates/InRelease  Temporary   failure resolving 'archive.ubuntu.com'
W: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal-backports/InRelease    Temporary failure resolving 'archive.ubuntu.com'
W: Failed to fetch http://security.ubuntu.com/ubuntu/dists/focal-security/InRelease    Temporary failure resolving 'security.ubuntu.com'
W: Some index files failed to download. They have been ignored, or old ones used instead.
```
On wsl2 `sudo apt update` will fail when connected to Cisco Anyconnect VPN but without
vpn it works fine. The problem is when you are connected to anyconnect, wsl fails to resolve
the DNS.


## The solution

1. Connect Cisco Anyconnect VPN, then open up powershell as Admin and run the following commands
to get the all the available DNS/nameservers. Take note of the DNS/namservers will need later.

  ```shell
  Get-DnsClientServerAddress -AddressFamily IPv4 | Select-Object -ExpandProperty ServerAddresses
  ```

2. Then on the same powershell run the following. This will get the search domain that will
need later on with the nameservers above.

  ```shell
  Get-DnsClientGlobalSetting | Select-Object -ExpandProperty SuffixSearchList
  ```

3. Open up wsl, and run the following commands.

  ```shell
  sudo unlink /etc/resolv.conf # this will unlink the default wsl2 resolv.conf

  # This config will prevent wsl2 from overwritting the resolve.conf file everytime
  # you start wsl2
  cat <<EOF | sudo tee -a /etc/wsl.conf
  [network]
  genearteResolvConf = false
  EOF

  cat <<EOF | sudo tee -a /etc/resolv.conf
  nameserver 10.50... # The company DNS/nameserver from the command in step 1
  nameserver 10.50... # The company DNS/nameserver from the command in step 1
  nameserver 8.8.8.8
  nameserver 8.8.4.4
  search this.searchdomain.com # The search domain that we got from step 2
  EOF
  ```

4. Change Cisco Anyconnect metric from default 1 to 6000 inside powershell

  ```shell
  Get-NetAdapter | Where-Object {$_.InterfaceDescription -Match "Cisco AnyConnect"} | Set-NetIPInterface -InterfaceMetric 6000
  ```

5. Restart wsl2 on the same elevated powershell, then you can open up wsl2 and it should connect to
the internet.

  ```shell
  Restart-Service LxssManager
  ```

### References
[https://github.com/microsoft/WSL/issues/5068](https://github.com/microsoft/WSL/issues/5068)
[https://github.com/microsoft/WSL/issues/4277](https://github.com/microsoft/WSL/issues/4277)
