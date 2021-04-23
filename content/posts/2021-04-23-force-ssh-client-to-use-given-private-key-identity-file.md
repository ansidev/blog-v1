---
type: post
title: Force SSH client to use given private key
date: 2021-04-23T14:53:50+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /server/force-ssh-client-to-use-given-private-key-identity-file
categories:
  - Server Administrations
  - Linux
  - Unix
tags:
  - ssh
  - private key
---

# Problem

You want force SSH client to use given private key to login to server.

# Solution

```shell
ssh -i /path/to/private_key user@server
```

Or with custom SSH port: add parameter `-p port_number`.

```shell
ssh -i /path/to/private_key -p port_number user@server
```

If you added some SSH keys into ssh-agent, you need to add parameter `-o "IdentitiesOnly=yes"` to prevent ssh-agent from overriding the private key specified.

```shell
ssh -o "IdentitiesOnly=yes" -i /path/to/private_key -p port_number user@server
```
