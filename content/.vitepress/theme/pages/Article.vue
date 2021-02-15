<template>
  <article class="xl:divide-y xl:divide-gray-200">
    <div id="fb-root" />
    <header class="pt-6 xl:pb-10 space-y-1 text-center">
      <Date :date="date" />
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
      >{{ data.title }}</h1>
    </header>

    <div
      class="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-6 pb-16 xl:pb-20"
      style="grid-template-rows: auto 1fr;"
    >
      <Author />
      <div class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <Content class="theme-ansidev-content prose max-w-none pt-10 pb-8" />
        <FacebookComment :number-of-posts="5" width="100%" :post-url="postURL" />
      </div>

      <footer
        class="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"
      >
        <div v-if="nextPost" class="py-8">
          <h2 class="text-xs tracking-wide uppercase text-gray-500">Next Article</h2>
          <div class="link">
            <a :href="nextPost.href">{{ nextPost.title }}</a>
          </div>
        </div>
        <div v-if="prevPost" class="py-8">
          <h2 class="text-xs tracking-wide uppercase text-gray-500">Previous Article</h2>
          <div class="link">
            <a :href="prevPost.href">{{ prevPost.title }}</a>
          </div>
        </div>
        <div class="pt-8">
          <h2 class="text-xs tracking-wide uppercase text-gray-500">Share</h2>
          <Sharing :url="postURL" :text="$page.title" />
        </div>
        <div class="pt-8">
          <a class="link" href="/">← Back to the blog</a>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useFrontmatter, useSiteData, useRoute } from 'vitepress'
import Date from '../components/Date.vue'
import Author from '../components/Author.vue'
import FacebookComment from '../../plugins/facebookComment/components/FacebookComment.vue'
import Sharing from '../../plugins/share/components/Sharing.vue'
// import { directive as MediumZoom } from '../../plugins/mediumZoom/MediumZoom'

const data = useFrontmatter()
const route = useRoute()
const posts = useSiteData().value.customData.posts
const baseURL = useSiteData().value.themeConfig.baseURL

function findCurrentIndex() {
  return posts.findIndex(p => p.href === route.path)
}

// use the customData date which contains pre-resolved date info
const postURL = computed(() => `${baseURL}${route.path}`)
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>
