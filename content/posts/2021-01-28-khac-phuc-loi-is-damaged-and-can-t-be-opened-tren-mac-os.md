---
type: post
title: Khắc phục lỗi "is damaged and can't be opened" trên macOS
date: 2021-01-28T18:11:54+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: "@ansidev"
permalink: /mac-os/2021-01-28-khac-phuc-loi-is-damaged-and-can-t-be-opened-tren-mac-os/
categories:
  - macOS
tags:
  - damaged
  - opened
---
# Nguyên nhân

Do cơ chế xác thực ứng dụng của Apple, chỉ những ứng dụng được Apple xác thực mới có thể chạy bình thường.

# Giải pháp

## Tắt GateKeeper

- Mở ứng dụng **Terminal**.
- Chạy lệnh:

```bash
sudo spctl --master-disable
```

- Nhập mật khẩu và nhấn `Enter`.
- Mở ứng dụng **System Preferences** và truy cập **Security & Privacy**, kiểm tra xem có hiện mục **Anywhere** không, nếu hiện là OK.

<img class="medium-zoom" src="/uploads/2021/01/28/System_Preferences.png" alt="System Preferences" />

- Tắt và chạy lại ứng dụng.

Note:

- Nếu bạn muốn bật GateKeeper thì mở Terminal và chạy lệnh sau:

```bash
sudo spctl --master-enable
```

- Kiểm tra GateKeeper đang bật hay đang tắt bằng lệnh:

```bash
spctl --status
```

Kết quả trả về:

`assessments enabled`: GateKeeper đang bật.

`assessments disabled`: GateKeeper đang tắt.


## Thêm ngoại lệ để cho phép ứng dụng chạy

Trong một số trường hợp, dù đã tắt GateKeeper nhưng vẫn chưa khắc phục được thì bạn có thể thử cách này.

- Mở ứng dụng **Terminal**.
- Chạy lệnh:

```bash
sudo xattr -rd com.apple.quarantine /Applications/AppName.app
```

Note: Thay `/Applications/AppName.app` bằng đường dẫn đến app bạn cần thêm ngoại lệ.

- Nhập mật khẩu và nhấn `Enter`.


