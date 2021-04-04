import { useSiteData } from 'vitepress'
import VueGtag from "vue-gtag-next"

const gtag = useSiteData().value.themeConfig.plugins.gtag

export default ({ app }) => {
  app.use(VueGtag, {
    property: {
      id: gtag.id
    }
  })
}
