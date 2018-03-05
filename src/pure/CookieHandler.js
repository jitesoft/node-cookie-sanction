/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  CookieParser - Part of the cookie-consent project.

  © - Jitesoft 2018
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Class handling cookie parsing and creation.
 */
export default class CookieHandler {
  /**
   * Get value from a given cookie.
   * Returns null if the cookie does not exist.
   *
   * @param {string} name
   * @return {null|string|bool|number}
   */
  getValue (name) {
    let parsed = this._parseCookies();
    if (parsed[name] !== undefined) {
      return parsed[name];
    }
    return null;
  }

  /**
   * Create a cookie on the current site.
   *
   * @param {string} name
   * @param {string|bool|number} value
   */
  createCookie (name, value) {
    document.cookie = `${name}:${value}`;
  }

  /**
   * Parses the pages cookies.
   *
   * @return {{string: name, mixed: value}}
   */
  _parseCookies () {
    let cookies = document.cookie.split(';');
    let fixed = {};
    let spl = [];

    for (let i = 0; i < cookies.length; i++) {
      spl = cookies[i].trim().split('=');
      fixed[spl[0]] = spl[1];
    }

    return fixed;
  }
}
