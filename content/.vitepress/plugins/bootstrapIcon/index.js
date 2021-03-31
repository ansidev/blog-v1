import { defineAsyncComponent } from 'vue'
import { bootstrapIcons } from './icons'
import { getBootstrapIconComponentOptions } from './utils'

export default ({ app }) => {
  bootstrapIcons.forEach(({ name, path }) => {
    app.component(`${name}-icon`, getBootstrapIconComponentOptions({ name, path }))
  })
}
