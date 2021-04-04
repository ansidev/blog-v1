import './tailwind.css'
import './style.css'

import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp(context) {
    Object.values(import.meta.globEager(`../plugins/**/index.js`)).map(plugin => {
      plugin.default(context)
    })
  }
}
