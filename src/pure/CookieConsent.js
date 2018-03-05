/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  CookieConsent.js - Part of the cookie-consent project.

  © - Jitesoft 2018
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import CookieHandler from './CookieHandler';

/**
 * Default values for options.
 *
 * @type {{element: string, cookie: string, cookieValue: string, hiddenClass: string, acceptButton: string, rejectButton: string}}
 */
const defaults = {
  element: 'div.cookie-consent',
  cookie: 'accept-cookies',
  cookieValue: 'accepted',
  hiddenClass: 'hidden',
  acceptButton: 'div.cookie-consent > button[name="accept"]',
  rejectButton: 'div.cookie-consent > button[name="reject"]'
};

/**
 * Cookie consent class.
 */
class CookieConsent {
  constructor (options) {
    this.options = Object.assign(defaults, options);
    this.cookieHandler = new CookieHandler();
  }

  async active () {
    return new Promise((resolve, reject) => {
      // Check for cookie.
      if (this.cookieHandler.getValue(this.options.cookie) !== null) {
        return resolve();
      }

      let element = document.querySelector(this.options.element);
      if (!element || element.length === 0) {
        return reject(new Error('Failed to locate element to apply cookie consent code to.'));
      }

      let accept = element.querySelector(this.options.acceptButton);
      let decline = element.querySelector(this.options.rejectButton);

      if (!accept || accept.length === 0) {
        return reject(new Error('Failed to locate the accept button.'));
      }

      accept.addEventListener('click', () => {
        element.classList.add(this.options.hiddenClass);
        this.cookieHandler.createCookie(this.options.cookie, this.options.cookieValue);
        resolve();
      });

      if (decline && decline.length > 0) {
        decline.addEventListener('click', () => {
          reject(new Error('User rejected cookie consent.'));
        });
      }

      element.classList.remove(this.options.hiddenClass);
    });
  }
}

export default CookieConsent;
