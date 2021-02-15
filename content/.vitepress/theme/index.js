import './tailwind.css'
import './style.css'

import Layout from './Layout.vue'

const plugins = [
  // 'facebookComment',
  'bootstrapIcon',
  // 'share',
]

export default {
  Layout,
  enhanceApp({ app }) {
    plugins.forEach(async (name) => {
      console.debug(`Loading plugin ${name}`)
      const plugin = await import(`../plugins/${name}/index.js`)
      plugin.default({ app })
    })
  }
}
