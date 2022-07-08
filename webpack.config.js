const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'frontend/public'),
  entry: '../src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'frontend/public'),
    },
    compress: true,
    port: 3333,
  },
};
