const fs = require('fs');
const log = (msg) => {
  console.log(`[package.json compiler] ${msg}`)
};

class PackagePlugin {
  /**
   * @param {object|string} basePackage Base
   * @param {string} outputFile
   * @param {object|string} replace
   */
  constructor (basePackage, outputFile, replace) {
    this.base = (basePackage instanceof String) ? JSON.parse(basePackage) : basePackage;
    this.replace = (replace instanceof String) ? JSON.parse(replace) : replace;
    this.output = outputFile;
  }

  /**
   * Build the package json file (replace values with replacements).
   * @return {Promise<any>}
   */
  async build () {
    log('Building package.json file.');
    return new Promise((resolve) => {
      for (let key in this.replace) {
        this.base[key] = this.replace[key];
      }
      resolve();
    });
  }

  /**
   * Write the package.json file.
   * @return {Promise<any>}
   */
  async write() {
    log('Emitting package.json file.');
    return new Promise((resolve, reject) => {
      fs.writeFile(this.output, JSON.stringify(this.base, null, 2), null, (e) => {
        if (e) {
          return reject(e);
        }
        resolve();
      });
    });
  }

  /**
   * @param compiler
   */
  apply (compiler) {
    compiler.plugin('compile', this.build.bind(this));
    compiler.plugin('emit', this.write.bind(this));
  }
}

module.exports = PackagePlugin;
