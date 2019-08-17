// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/welcome-2019-PC/'
    : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.entry.app = ['babel-polyfill', './src/main.js'];
  },
  pwa: {
    name: 'welcome-2019-pc',
    themeColor: '#b0ceff',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      include: [/\.html$/, /\.js$/, /\.(?:png|gif|jpg|jpeg|svg)$/, /\.css$/],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://wx.idsbllp.cn/234/seniorhelpme/question',
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
