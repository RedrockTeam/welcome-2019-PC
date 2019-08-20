// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/game/welcome2019/pc/'
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
    name: '邮你造未来 | 2019 迎新网',
    themeColor: '#b0ceff',
    msTileColor: '#b0ceff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#b0ceff',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      include: [/\.html$/, /\.js$/, /\.(?:png|gif|jpg|jpeg|svg)$/, /\.css$/, /\.(?:eot|svg|ttf|woff|woff2)$/],
    },
    iconPaths: {
      favicon32: 'img/icons/logo192x192.png',
      favicon16: 'img/icons/logo192x192.png',
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
