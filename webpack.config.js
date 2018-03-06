const PackagePlugin = require('./src/PackagePlugin');
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV || 'development';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package');
delete pkg.devDependencies;
delete pkg.dependencies;
delete pkg.scripts;
delete pkg.eslintConfig;
delete pkg.semistandard;

const js = {
  mode: mode,
  entry: './src/pure/index.js',
  target: 'web',
  output: {
    filename: 'index.js',
    path: dist + '/js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './readme.md',
      to: './readme.md',
      transform (content) {
        content = content.toString();
        return content.replace(content.substring(content.indexOf('## Vue')), '');
      }
    }]),
    new PackagePlugin(pkg, dist + '/js/package.json', {
      description: 'Pure JavaScript cookie consent code.'
    })
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
    new CopyWebpackPlugin([
      {
        from: './readme.md',
        to: './readme.md',
        transform (content) {
          content = content.toString();
          content = content.replace(content.substring(content.indexOf('## Vanilla js'), content.indexOf('## Vue')), '');
          return content.replace(content.substring(content.indexOf('## React')), '');
        }
      }
    ]),
    new PackagePlugin(pkg, dist + '/vue/package.json', {
      name: 'cookie-consent-vue',
      description: 'Vue component for easy implementation of cookie consent.'
    })
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
    new CopyWebpackPlugin([{
      from: './readme.md',
      to: './readme.md',
      transform (content) {
        content = content.toString();
        return content.replace(content.substring(content.indexOf('## Vanilla js'), content.indexOf('## React')), '');
      }
    }]),
    new PackagePlugin(pkg, dist + '/react/package.json', {
      name: 'cookie-consent-react',
      description: 'React component for easy implementation of cookie consent.'
    }) ]
};

module.exports = [
  js, vue, react
];
