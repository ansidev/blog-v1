const fs = require('fs')
const path = require('path')
const { Feed } = require('feed')
const { getPosts } = require('./getPosts')
const { baseURL } = require('./plugins/site')

const feed = new Feed({
  title: 'ansidev\'s blog',
  description: 'Blog of ansidev',
  id: baseURL,
  link: baseURL,
  language: 'en',
  image: `${baseURL}/logo.jpg`,
  favicon: `${baseURL}/favicon.ico`,
  copyright:
    'Copyright (c) 2019-present, Le Minh Tri (@ansidev)'
})

getPosts(true).forEach((post) => {
  const file = path.resolve(__dirname, `dist${post.href}`)
  const rendered = fs.readFileSync(file, 'utf-8')
  const content = rendered.match(
    /<div class="prose[^<>]+>([\s\S]*)<\/div><!----><\/div><footer/
  )

  feed.addItem({
    title: post.title,
    id: `${baseURL}${post.href}`,
    link: `${baseURL}${post.href}`,
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
