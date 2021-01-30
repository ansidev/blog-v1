<template>
  <div class="fb-comments" :data-href="postURL" :data-width="width" :data-numposts="numberOfPosts" />
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useSiteData } from 'vitepress'

const initFacebookCommentPlugin = (pluginConfig) => {
  if (window.FB) {
    window.FB.init({
      appId      : pluginConfig.appId,
      status     : true,
      xfbml      : true,
      version    : pluginConfig.version
    })
  }
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
   * Post URL
   * { string }
   */
  postURL: String,
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

const pluginConfig = useSiteData().value.themeConfig.facebookComment

onMounted(() => initFacebookCommentPlugin(pluginConfig))
</script>
