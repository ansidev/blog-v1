import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  const SharingButton = defineAsyncComponent(() => import('./components/SharingButton.vue'))
  app.component('SharingButton', SharingButton)

  const Sharing = defineAsyncComponent(() => import('./components/Sharing.vue'))
  app.component('Sharing', Sharing)
}
