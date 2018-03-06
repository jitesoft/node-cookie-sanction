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
  acceptButton: 'div.cookie-consent button[name="accept"]',
  rejectButton: 'div.cookie-consent button[name="reject"]'
};

/**
 * Cookie consent class.
 */
class CookieConsent {
  constructor (options) {
    this.options = Object.assign(defaults, options);
    this.cookieHandler = new CookieHandler();
  }

  hide (element) {
    element.classList.add(this.options.hiddenClass);
  }

  async active () {
    return new Promise((resolve, reject) => {
      let element = document.querySelector(this.options.element);

      if (!element) {
        this.hide(element);
        return reject(new Error('Failed to locate element to apply cookie consent code to.'));
      }

      // Check for cookie.
      if (this.cookieHandler.getValue(this.options.cookie) !== null) {
        this.hide(element);
        return resolve(true);
      }

      let accept = element.querySelector(this.options.acceptButton);
      let decline = element.querySelector(this.options.rejectButton);

      if (accept === null) {
        this.hide(element);
        return reject(new Error('Failed to locate the accept button.'));
      }

      accept.addEventListener('click', () => {
        this.cookieHandler.createCookie(this.options.cookie, this.options.cookieValue);
        this.hide(element);
        resolve(true);
      });

      if (decline !== null) {
        decline.addEventListener('click', () => {
          this.hide(element);
          return resolve(false);
        });
      }

      // Hide the element.
      element.classList.remove(this.options.hiddenClass);
    });
  }
}

export default CookieConsent;
