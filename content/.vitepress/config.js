// @ts-check
const { getPosts, getPages } = require('./getPosts')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'ansidev\'s blog',
  description: 'Blog of ansidev',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  customData: {
    posts: [
      ...getPosts(),
      ...getPages()
    ]
  }
}
