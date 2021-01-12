const fs = require('fs')
const path = require('path')
const { Feed } = require('feed')
const { getPosts } = require('./getPosts')
const url = `https://blog.ansidev.xyz`

const feed = new Feed({
  title: 'ansidev\'s blog',
  description: 'Blog of ansidev',
  id: url,
  link: url,
  language: 'en',
  image: `${url}/logo.jpg`,
  favicon: `${url}/favicon.ico`,
  copyright:
    'Copyright (c) 2019-present, Le Minh Tri (@ansidev)'
})

getPosts(true).forEach((post) => {
  const file = path.resolve(__dirname, `dist${post.href}`)
  const rendered = fs.readFileSync(file, 'utf-8')
  const content = rendered.match(
    /<div class="prose[^<>]+>([\s\S]*)<\/div><\/div><footer/
  )

  feed.addItem({
    title: post.title,
    id: `${url}${post.href}`,
    link: `${url}${post.href}`,
    description: post.excerpt,
    content: content[1],
    author: [
      {
        name: post.data.author,
        link: post.data.twitter
          ? `https://twitter.com/${post.data.twitter}`
          : undefined
      }
    ],
    date: post.data.date
  })
})

fs.writeFileSync(path.resolve(__dirname, 'dist/feed.rss'), feed.rss2())
