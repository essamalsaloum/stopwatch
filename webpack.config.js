const path = require('path');
const webpack = require('webpack');

const sourcePath = path.resolve(__dirname, './app');
const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  context: sourcePath,
  entry: {
    app: './index.js'
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './app',
    port: 3000
  }
};