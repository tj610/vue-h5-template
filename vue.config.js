const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 部署应用时的基本 URL
  publicPath: './',
  // build时构建文件的目录
  outputDir: process.env.outputDir,
  // build时放置生成的静态资源
  assetsDir: '',
  // 指定生成的 index.html
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 关闭生产环境的source map加速生产环境构建
  productionSourceMap: false,
  // webpack配置
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios'
    }
  },  
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 开发环境
  devServer: {
    disableHostCheck: true,
    open: false,
    host: '192.168.1.121',
    port: 84,
    // proxy: {
    //   '/info': {
    //     target: 'http://www.jieruiedu.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/info': '/info'
    //     }
    //   }
    // },
  }
}
