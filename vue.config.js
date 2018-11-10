module.exports = {
  lintOnSave: false,

  devServer: {
    port: 8080,
  },

  configureWebpack: function(config) {
    if (process.env.MS_COVERAGE === 'enabled') {
      return {
        module: {
          rules: [
            {
              test: /\.ts$/,
              enforce: 'post',
              include: [
                function (input) {
                  return input.includes('/view/src/app') && !input.includes('.vue.ts')
                }
              ],
              use: [{
                loader: 'istanbul-instrumenter-loader',
                options: {
                  esModules: true
                }
              }]
            }
          ]
        }
      }
    }
  }
}
