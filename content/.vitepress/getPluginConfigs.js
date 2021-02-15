const fs = require('fs')
const path = require('path')

exports.getPluginConfigs = function getPluginConfigs(relativePath) {
  const configDir = path.resolve(__dirname, relativePath)

  return fs
    .readdirSync(configDir)
    .map(file => file)
    .reduce((pluginConfigs, plugin) => {
      const pluginConfigPath = path.join(__dirname, `${relativePath}/${plugin}/index.js`)
      if (!fs.existsSync(pluginConfigPath)) {
        return pluginConfigs
      }

      const config = require(pluginConfigPath)
      if (typeof config === 'undefined') {
        return pluginConfigs
      }

      pluginConfigs[plugin] = config
      return pluginConfigs
    }, {})
}
