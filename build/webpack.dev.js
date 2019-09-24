const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
  mode:'development',
  //服务器
  devtool: 'eval-source-map',
  plugins:[
    new webpack.HotModuleReplacementPlugin(), //调用webpack的热更新插件
  ],
  devServer: {
    // 设置服务器访问的基本目录
    contentBase: path.resolve(__dirname, 'dist'), //最好设置成绝对路径
    // 设置服务器的ip地址
    host: '127.0.0.1',
    // 设置端口
    port: '8888',
    // 设置自动拉起浏览器
    open: true,
    // 设置热更新
    hot: true
  }
});