import { useSiteData } from 'vitepress'
import VueGtag from "vue-gtag-next"

const gtag = useSiteData().value.themeConfig.plugins.gtag

export default ({ app }) => {
  console.log('Install gtag plugin')
  app.use(VueGtag, {
    property: {
      id: gtag.id
    }
  })
}
