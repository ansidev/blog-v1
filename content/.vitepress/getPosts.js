const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const getCustomPosts = function getPosts(postType, relativePath, baseSlug, asFeed) {
  const postDir = path.resolve(__dirname, relativePath)
  return fs
    .readdirSync(postDir)
    .map((file) => {
      const src = fs.readFileSync(path.join(postDir, file), 'utf-8')
      const { data, excerpt } = matter(src, { excerpt: true })
      const post = {
        title: data.title,
        href: `${baseSlug}/${file.replace(/\.md$/, '.html')}`,
        date: typeof data.date !== 'undefined' ? formatDate(data.date) : undefined,
        type: postType,
        excerpt
      }
      if (asFeed) {
        // only attach these when building the RSS feed to avoid bloating the
        // client bundle size
        post.data = data
      }
      return post
    })
    .sort((a, b) => b.date.time - a.date.time)
}

exports.getPosts = function getPosts(asFeed = false) {
  return getCustomPosts('post', '../posts', '/posts', asFeed)
}

exports.getPages = function getPages() {
  const pageDir = path.resolve(__dirname, '../')
  return fs
    .readdirSync(pageDir)
    .filter((file) => path.extname(file).toLowerCase() === '.md' && file !== 'index.md')
    .map((file) => {
      const src = fs.readFileSync(path.join(pageDir, file), 'utf-8')
      const { data, excerpt } = matter(src, { excerpt: true })
      const post = {
        title: data.title,
        href: `/${file.replace(/\.md$/, '.html')}`,
        date: formatDate(data.date),
        type: 'page',
        excerpt
      }

      return post
    })
    .sort((a, b) => b.date.time - a.date.time)
}

function formatDate(date) {
  if (!date instanceof Date) {
    date = new Date(date)
  }
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
