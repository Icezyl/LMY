
const isProduction = process.env.NODE_ENV === 'production'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  outputDir: 'dist',
  pages: {
    ui: {
      // page 的入口
      entry: './main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'ui']
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: true,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        // 开启压缩
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  }
}
