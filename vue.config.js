// vue.config.js
module.exports = {
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
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
