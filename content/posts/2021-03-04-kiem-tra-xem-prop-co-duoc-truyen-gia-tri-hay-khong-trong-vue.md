---
type: post
title: Kiểm tra xem prop có được truyền giá trị hay không trong Vue
date: 2021-03-04T16:10:03+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /vue/kiem-tra-xem-prop-co-duoc-truyen-gia-tri-hay-khong-trong-vue
categories:
  - Programming
  - Javascript
  - Front-end
  - Vue
tags:
  - vue
  - prop
---

Trong quá trình phát triển ứng dụng với Vue, đôi khi bạn sẽ cần kiểm tra prop có được truyền từ bên ngoài component hay không. Bài viết này sẽ hướng dẫn bạn làm điều đó.
---

# Vấn đề

Chúng ta có component Foo.vue

```js
export default {
  name: 'Foo',
  props: {
    bar: {
      type: String,
      required: false,
      default: 'bar'
    }
  }
}
```

Và bạn sử dụng component này tại một nơi nào đó trong ứng dụng của bạn. Cả hai cách sau đều sẽ cho giá trị của prop `bar` là `bar`.

```vue
<Foo />
```

```vue
<Foo bar="bar" />
```

Vậy làm sao xác định khi nào prop `bar` được truyền giá trị từ ngoài, khi nào thì đang sử dụng giá trị mặc định?

# Cách giải quyết

Các giá trị được truyền từ bên ngoài vào được lưu trong biến `this.$options.propsData`.

Để kiểm tra một prop có được truyền giá trị từ ngoài vào hay không thì bạn có thể làm như sau:

```js
Object.keys(this.$options.propsData).some((prop) => prop === 'bar')
```

Ở đây, `bar` chính là tên của prop cần kiểm tra.
