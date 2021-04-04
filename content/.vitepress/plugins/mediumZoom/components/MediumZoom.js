import { computed, h, onMounted, onUpdated, onUnmounted } from 'vue'
import { useSiteData } from 'vitepress'
import mediumZoom from 'medium-zoom'

const defaultConfigs = {
  selector: '[data-zoomable]',
  options: {},
}

const pluginConfig = useSiteData().value.themeConfig.plugins.mediumZoom

const hasPluginConfig = typeof pluginConfig === 'object'

const selector = computed(() => hasPluginConfig && typeof pluginConfig.selector === 'string' ? pluginConfig.selector : defaultConfigs.selector )
const options = computed(() => hasPluginConfig && typeof pluginConfig.options === 'object' ? pluginConfig.options : defaultConfigs.options )

let zoom = null

const updateZoom = () => {
  setTimeout(() => {
    if (zoom) {
      zoom.detach()
    }
    zoom = mediumZoom(selector.value, options.value)
  }, 1000)
}

export default {
  setup() {
    onMounted(updateZoom)
    onUpdated(updateZoom)
    onUnmounted(() => {
      if (zoom) {
        zoom.detach()
      }
    })

    return () => h('div')
  }
}
