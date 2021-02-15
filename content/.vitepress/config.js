// @ts-check
const { getPluginConfigs } = require('./getPluginConfigs')
const { getPosts, getPages } = require('./getPosts')
const { baseURL } = require('./plugins/site')
const { appId } = require('./configs/facebookComment')

const plugins = getPluginConfigs('./configs')

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
        content: appId
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
    ]
  },
  themeConfig: {
    baseURL,
    plugins
  }
}
