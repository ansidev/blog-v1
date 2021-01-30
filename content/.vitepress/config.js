// @ts-check
const { getPosts, getPages } = require('./getPosts')
const facebookComment = require('./plugins/facebookComment')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'ansidev\'s blog',
  description: 'Blog of ansidev',
  head: [
    [
      'meta',
      {
        property: 'fb:app_id',
        content: facebookComment.appId
      }
    ],
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
    ],
    plugins: {
      facebookComment
    }
  },
}
