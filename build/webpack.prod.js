const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');
const webpack = require('webpack')
//打包用时间戳
let date = new Date();
let
  month = timer(date.getMonth() + 1),
  day = timer(date.getDate()),
  hour = (date.getHours()),
  minute = timer(date.getMinutes());
let timeStr = `${month}${day}${hour}${minute}`;

function timer(tim) {
  return (tim + 1) < 10 ? `0${tim}` : tim;
}
module.exports = merge(baseWebpackConfig, {
  mode:'production',
  output: {
    publicPath: './'
  },
  plugins: [
    //压缩js 
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({}), // 压缩css
    //打包zip
    new FileManagerPlugin({
      onEnd: {
        mkdir: ['./zip'],
        archive: [{
          source: './dist',
          destination: `./zip/swy${timeStr}.zip`
        }]
      }
    })
  ],
  optimization:{
    //  分包
    splitChunks: {
      chunks: 'all',   // initial、async和all
      minSize: 30000,   // 形成一个新代码块最小的体积
      maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
      maxInitialRequests: 3,   // 最大初始化请求数
      automaticNameDelimiter: '~',   // 打包分割符
      name: true,
      cacheGroups: {
        base: {
          name: 'base',
          test: (module) => {
              return /react|react-dom|redux/.test(module.context);
          },
          chunks: 'initial',
          priority: 10,
        },
        util: {
          name: 'util',
          test: (module) => {
              return /rxjs|lodash/.test(module.context);
          },
          chunks: 'initial',
          priority: 9,
        },
        ui: {
          name: "ui",
          test: (module) => {
              return /antd/.test(module.context);
          },
          chunks: 'initial',
          priority: 8,
        },
        commons: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
      }
    }
  }
});