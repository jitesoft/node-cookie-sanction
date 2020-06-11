/* eslint-disable */
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: mode,
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'CookieConsent',
    path: dist,
    umdNamedDefine: true
  }
};
