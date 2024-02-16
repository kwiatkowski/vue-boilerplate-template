const webpack = require('webpack')
const path = require('path')

module.exports = {
  lintOnSave: false,
  outputDir: 'web',
  devServer: {
    port: 8080,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_TITLE': JSON.stringify(process.env.VUE_APP_TITLE),
        'process.env.VUE_APP_FAVICON': JSON.stringify(process.env.VUE_APP_FAVICON),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
      }),
    ],
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  }
}
