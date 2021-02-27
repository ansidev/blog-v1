---
type: post
title: Flutter Cheatsheet
date: 2021-02-09T00:37:02+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /flutter/flutter-cheatsheet/
categories:
  - Tips and Tricks
  - Flutter
tags:
  - flutter
  - cheatsheet
---
Bài viết tổng hợp kinh nghiệm cá nhân của mình trong quá trình lập trình với Flutter. Hy vọng sẽ giúp ích và tiết kiệm được thời gian của các bạn.
---

# Problems

Một số lỗi thường gặp trong quá trình lập trình với Flutter:

> avdmanager is missing from the Android SDK

Nguyên nhân:
- Chưa cài Android SDK
=> Cài Android SDK
- Đường dẫn config của Android SDK trong Flutter chưa đúng.
=> Set lại đường dẫn bằng lệnh: `flutter config --android-sdk {path}`
=> Trong đó {path} là đường dẫn đến thư mục chứa Android SDK
=> Nếu bạn kiểm tra biến `$ANDROID_HOME` là đường dẫn đúng thì dùng lệnh `flutter config --android-sdk $ANDROID_HOME` cho lẹ.

-- **TO BE CONTINUED** --
