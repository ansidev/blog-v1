<template>
  <template v-for="(network, key) in networks" :key="network">
    <SharingButton
      :url="url"
      :text="text"
      :network="network"
      :button-size="buttonSize"
      :icon-size="iconSize"
      :icon-style="iconStyle"
      :display-mode="displayMode"
    />
  </template>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useSiteData } from 'vitepress'
import SharingButton from './SharingButton.vue'

const props = defineProps({
  /**
   * URL to share
   * { string }
   */
  url: String,
  /**
   * Share text
   * { string }
   */
  text: String,
  /**
   * Share options
   * { object }
   */
  // shareOptions: Object,
})

const defaultConfigs = {
  networks: [
    'email',
    'facebook',
    'twitter',
    'telegram',
    'reddit',
    'linkedin',
    'whatsapp',
    'pinterest',
    'tumblr',
    'vk',
  ],
  buttonSize: 18,
  iconSize: 16,
  iconStyle: 'solid',
  displayMode: 'both'
}

const pluginConfig = useSiteData().value.themeConfig.plugins.share

const hasPluginConfig = computed(() => typeof pluginConfig === 'object')

const networks = computed(() => hasPluginConfig && Array.isArray(pluginConfig.networks) ? pluginConfig.networks : defaultConfigs.networks )
const buttonSize = computed(() => hasPluginConfig && Number.isInteger(pluginConfig.buttonSize) && pluginConfig.buttonSize > 0 ? pluginConfig.buttonSize : defaultConfigs.buttonSize )
const iconSize = computed(() => hasPluginConfig && Number.isInteger(pluginConfig.iconSize) && pluginConfig.iconSize > 0 ? pluginConfig.iconSize : defaultConfigs.iconSize )
const iconStyle = computed(() => hasPluginConfig && typeof pluginConfig.iconStyle === 'string' ? pluginConfig.iconStyle : defaultConfigs.iconStyle )
const displayMode = computed(() => hasPluginConfig && typeof pluginConfig.displayMode === 'string' ? pluginConfig.displayMode : defaultConfigs.displayMode )
</script>
