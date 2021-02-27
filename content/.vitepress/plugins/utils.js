import { defineAsyncComponent } from 'vue'

export const registerPluginComponent = (app, components) => {
  for (const [componentName, componentRelativePath] of Object.entries(components)) {
    const component = defineAsyncComponent(() => import(componentRelativePath))
    app.component(componentName, component)
  }
}
