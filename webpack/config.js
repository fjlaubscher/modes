const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const alias = require('./alias');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      }
    ]
  },
  resolve: {
    alias
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: './src/assets/favicon.ico',
      template: './src/index.html'
    })
  ]
};
