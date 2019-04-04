const path = require('path');
// 生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 每次打包时先清空dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundel.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理图片引入
      {
        test: /\.(png|svg|jpg|git)$/,
        use: [
          'file-loader'
        ]
      },
      // 处理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      //
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      // 处理xml
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}