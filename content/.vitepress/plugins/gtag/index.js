import VueGtag from "vue-gtag-next"

export default ({ app, siteData }) => {
  const gtagId = siteData?.value?.themeConfig?.plugins?.gtag?.id
  app.use(VueGtag, {
    property: {
      id: gtagId
    }
  })
}
