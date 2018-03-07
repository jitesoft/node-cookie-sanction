const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV || 'development';

const config = {
  mode: mode,
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'CookieConsent',
    path: dist,
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [ [
          'env', {
            targets: {
              browsers: ['since 2016']
            }
          }]
        ]
      }
    }]
  }
};

module.exports = config;
