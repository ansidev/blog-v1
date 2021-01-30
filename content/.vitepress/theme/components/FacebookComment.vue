<template>
  <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" :data-width="width" :data-numposts="numberOfPosts" />
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useSiteData } from 'vitepress'

const initFacebookCommentPlugin = (pluginConfig) => {
  let externalScript = document.createElement('script')
  externalScript.setAttribute('async', '')
  externalScript.setAttribute('defer', '')
  externalScript.setAttribute('crossorigin', 'anonymous')
  externalScript.setAttribute('src', `https://connect.facebook.net/${pluginConfig.lang}/sdk.js#xfbml=1&version=${pluginConfig.version}&appId=${pluginConfig.appId}`)
  externalScript.setAttribute('nonce', pluginConfig.nonce)
  document.head.appendChild(externalScript)
}

const props = defineProps({
  /**
   * Width of comment container
   * { number, string }
   */
  width: [Number, String],

  /**
   * { Number of posts to display }
   */
  numberOfPosts: Number,
})

const pluginConfig = useSiteData().value.customData.plugins.facebookComment

onMounted(() => initFacebookCommentPlugin(pluginConfig))
</script>
