import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  const FacebookComment = defineAsyncComponent(() => import('./components/FacebookComment.vue'))
  app.component('FacebookComment', FacebookComment)
}
