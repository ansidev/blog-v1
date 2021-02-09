---
type: post
title: Xác định biến được khai báo ở đâu (*nix system)
date: 2021-02-09T19:08:12+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /tips-and-tricks/2021-02-09-xac-dinh-bien-duoc-khai-bao-o-dau-unix-system/
categories:
  - Tips and Tricks
tags:
  - zsh
  - bash
  - unix
---

# Vấn đề

Mình có sử dụng một số plugin trong shell hiện tại, các plugin sẽ khai báo một số custom command, environment variable,  ... nên đôi khi sẽ override các setting riêng của mình.
Mình cần xác định một custom command, environment variable,  ... được khai báo bởi plugin nào để disable.

# Giải pháp

Tùy thuộc vào shell bạn đang sử dụng mà sẽ có cách khác nhau. Trong phạm vi bài viết, mình chỉ hướng dẫn cho hai shell phổ biến nhất là `bash` và `zsh`.

**bash**

```bash
PS4='+$BASH_SOURCE> ' BASH_XTRACEFD=7 bash -xl 7>&2
```

**zsh**

```shell
zsh -xl 2>&1
```
