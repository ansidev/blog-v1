---
type: post
title: Cách khắc phục lỗi Failed to execute 'appendChild' on 'Node'
date: 2021-03-04T16:10:03+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /vue/cach-khac-phuc-loi-failed-to-append-child-on-node
categories:
  - Programming
  - Javascript
  - Front-end
  - Vue
tags:
  - vue
  - prop
---

Trong quá trình phát triển ứng dụng với Nuxt, đôi khi bạn sẽ gặp lỗi này khi build, bài viết này đưa ra hướng giải quyết cho bạn.
---

# Vấn đề

Trong một số trường hợp khi build ứng dụng Nuxt ở mode: `universal` hoặc target: `server` đối với các phiên bản mới hơn của Nuxt, bạn sẽ gặp lỗi:

```js
Failed to execute 'appendChild' on 'Node': This node type does not support this method.
```

# Nguyên nhân

- Lỗi này là do cấu trúc DOM không đồng nhất khi render trong quá trình build và runtime.
- Nguyên nhân thường gặp là do bạn đang sử dụng một vài component không hỗ trợ SSR.

# Cách giải quyết

- Detect component bị lỗi, cho vào trong thẻ `<client-only>` để Nuxt chỉ render khi runtime.
- **Lưu ý:** Trong một số trường hợp giải pháp trên sẽ không phải giải pháp thích hợp nhất, bạn cần dựa vào tình huống thực tế để đưa ra cách giải quyết thích hợp nhất.
