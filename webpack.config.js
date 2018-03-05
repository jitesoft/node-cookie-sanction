const path = require('path');
const PackagePlugin = require('./src/PackagePlugin');
const pkg = require('./package');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV || 'development';


const js = {
  mode: mode,
  entry: './src/pure/index.js',
  target: 'web',
  output: {
    filename: 'index.js',
    path: dist + '/js'
  },
  plugins: [
    new PackagePlugin(pkg, dist + '/js/package.json')
  ]
};

const vue = {
  mode: mode,
  entry: './src/vue/index.js',
  target: 'web',
  output: {
    filename: 'index.js',
    path: dist + '/vue'
  },
  plugins: [
    new PackagePlugin(pkg, dist + '/vue/package.json', {name: 'cookie-consent-vue'})
  ]
};

const react = {
  mode: mode,
  entry: './src/react/index.js',
  target: 'web',
  output: {
    filename: 'index.js',
    path: dist + '/react'
  },
  plugins: [
    new PackagePlugin(pkg, dist + '/react/package.json', {name: 'cookie-consent-react'})
  ]
};

module.exports = [
  js, vue, react
];
