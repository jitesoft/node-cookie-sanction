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
  }
};

module.exports = config;
