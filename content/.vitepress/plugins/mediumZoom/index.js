import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  const MediumZoom = defineAsyncComponent(() => import('./components/MediumZoom.js'))
  app.component('MediumZoom', MediumZoom)
}
