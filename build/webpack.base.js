const webpack = require('webpack');
const path = require('path') // 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  // 应用入口
  entry: {
    app: path.join(__dirname, '../src/app.js') // app.js作为打包的入口
  },
  // 输出目录
  output: {
    filename: 'js/[name].[hash:8].js', //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
    path: path.join(__dirname, '../dist'), // 打包好之后的输出路径
    chunkFilename: 'js/[id].[name].[hash:8].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {//别名
      '@static': resolve('src/static'),
      '@assets': resolve('src/assets'),
      '@com':resolve('src/components')
    }
  },
  module: {
    rules: [{
        test: /.js$/,
        loader: 'babel-loader'
      }, {
        test: /.(js)$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }, {
        test: /\.(less|css)$/,
        use: [{
          loader: "style-loader",options: { sourceMap: true }
        }, {
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {loader:'postcss-loader',options: { sourceMap: true }},
        {
          loader: 'less-loader',
          options: { sourceMap: true }
        }]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 90000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '..'),
      dry: false // 启用删除文件
    }),
    
    new webpack.optimize.RuntimeChunkPlugin({
        name: "common" // 指定公共 bundle 的名称
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[contenthash:8].css'
    }),
    //拷贝文件
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/static'),
      to: './static'
    }]),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
    })
  ]
}