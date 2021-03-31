import './tailwind.css'
import './style.css'

import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    Object.values(import.meta.globEager(`../plugins/**/index.js`)).map(plugin => {
      plugin.default({ app })
    })
  }
}
