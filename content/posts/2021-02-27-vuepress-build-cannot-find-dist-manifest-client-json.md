---
type: post
title: Lỗi không tìm thấy file manifest/client.json khi build project VuePress
date: 2021-02-27T13:14:13+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /tips-and-tricks/vuepress-build-cannot-find-dist-manifest-client-json
categories:
  - Tips and Tricks
tags:
  - vuepress
  - build
  - client
---

# Vấn đề

Khi chạy lệnh `vuepress build` thì quá trình build bị lỗi sau:

```js
Error: Cannot find module 'dist/manifest/client.json'
```

# Giải pháp

Set biến môi trường `NODE_ENV`=`production`

```bash
NODE_ENV=production npm run build
```
