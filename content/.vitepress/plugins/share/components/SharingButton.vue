<template>
  <div class="inline-block mx-1 my-4">
    <a
      :class="['btn', `btn-${network}`]"
      :href="shareURL"
      target="_blank"
      rel="noopener"
      :aria-label="networkName"
    >
      <component
         v-if="['icon', 'both'].includes(displayMode)"
        :is="networkIcon"
        :width="iconSize"
        :height="iconSize"
        class="inline"
      />
      <template v-if="['text', 'both'].includes(displayMode)">&nbsp;{{ networkName }}</template>
    </a>
  </div>
</template>

<script setup>
import { defineProps, computed, defineAsyncComponent } from 'vue'
import { buildUrlQueryParams } from '../utils/buildUrlQueryParams'

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
  /**
   * Social network
   * { string }
   */
  network: String,
  /**
   * Button size
   * { number }
   */
  buttonSize: Number,
  /**
   * Icon style
   * { number }
   */
  iconStyle: String,
  /**
   * Icon size
   * { number }
   */
  iconSize: Number,
  /**
   * Display mode
   * { string }
   */
  displayMode: String,
})

const provider = computed(() => {
  switch (props.network) {
    case 'email':
      return {
        name: 'E-mail',
        shareBaseURL: 'mailto:',
        icon: 'email-icon',
        params: { subject: props.text, body: props.url },
        allowedParams: ['subject', 'body']
      }
    case 'facebook':
      return {
        name: 'Facebook',
        shareBaseURL: 'https://facebook.com/sharer/sharer.php',
        icon: 'facebook-icon',
        params: { u: props.url },
        allowedParams: ['u', 'display', 'redirect_uri']
      }
    case 'linkedin':
      return {
        name: 'LinkedIn',
        shareBaseURL: 'https://www.linkedin.com/sharing/share-offsite',
        icon: 'linkedin-icon',
        params: { url: props.url },
        allowedParams: ['url']
      }
    // case 'pinterest':
    //   return {
    //     name: 'Pinterest',
    //     shareBaseURL: 'https://pinterest.com/pin/create/button',
    //     icon: 'pinterest-icon',
    //     params: { posttype: 'link', title: props.text, url: props.url },
    //     allowedParams: ['posttype', 'tags', 'title', 'content', 'caption', 'show-via', 'canonicalUrl']
    //   }
    case 'reddit':
      return {
        name: 'Reddit',
        shareBaseURL: 'https://www.reddit.com/submit',
        icon: 'reddit-icon',
        params: { title: props.text, url: props.url },
        allowedParams: ['title', 'url']
      }
    case 'telegram':
      return {
        name: 'Telegram',
        shareBaseURL: 'https://telegram.me/share/url',
        icon: 'telegram-icon',
        params: { text: props.text, url: props.url },
        allowedParams: ['text', 'url']
      }
    case 'tumblr':
      return {
        name: 'Tumbler',
        shareBaseURL: 'https://www.tumblr.com/widgets/share/tool',
        icon: 'tumbler-icon',
        params: { posttype: 'link', title: props.text, url: props.url },
        allowedParams: ['posttype', 'tags', 'title', 'content', 'caption', 'show-via', 'canonicalUrl']
      }
    case 'twitter':
      return {
        name: 'Twitter',
        shareBaseURL: 'https://twitter.com/intent/tweet',
        icon: 'twitter-icon',
        params: { text: props.text, url: props.url },
        allowedParams: ['text', 'url', 'hashtag', 'via']
      }
    case 'vk':
      return {
        name: 'VK',
        shareBaseURL: 'https://vk.com/share.php',
        icon: 'vk-icon',
        params: { title: props.text, url: props.url },
        allowedParams: ['title', 'url']
      }
    case 'whatsapp':
      return {
        name: 'WhatsApp',
        shareBaseURL: 'whatsapp://send',
        icon: 'whatsapp-icon',
        params: { text: props.url },
        allowedParams: ['text']
      }
    default:
      return {}
  }
})

const networkName = computed(() => provider.value.name)
const networkIcon = computed(() => provider.value.icon)
const shareURL = computed(() => {
  const url = provider.value.shareBaseURL
  const urlQueryParams = buildUrlQueryParams(provider.value.params)
  return `${url}${urlQueryParams}`
})
</script>
