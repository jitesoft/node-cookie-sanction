module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './index.js'],
  target: 'web',
  output: {
    filename: './compiled.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [ [
          'env', {
            targets: {
              browsers: ['since 2015']
            }
          }]
        ]
      }
    }]
  }
};
