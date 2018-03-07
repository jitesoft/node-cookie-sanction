# Cookie Sanction / Cookie Consent

A JavaScript module for front-end cookie consent functionality which allows for loading scripts after consent is 
accepted.  
The code is intended (and built) to be used with webpack, but feel free to test it with anything you wish!

## Vanilla js

### Installation and usage

Install the module from any of the standard channels:

```text
yarn add cookie-sanction
npm install cookie-sanction --save
bower install cookie-sanction --save
```

Include it in your own JavaScript as a module

```javascript
import { CookieConsent } from 'cookie-sanction';

const consent = new CookieConsent({
  /* options */
});

document.addEventListener('DOMContentLoaded', () => {
  consent.active().then((accepted) => {
    // accepted is true if user accepted, else false.
  }).catch(() => {
  
  });
});
```

### Optional arguments

When creating the cookie consent object, you can change a few default values:

```javascript
{
  element:      'div.cookie-consent', // The element that will toggle hidden or shown.
  cookie:       'accept-cookies',     // Name of the cookie to use.
  cookieValue:  'accepted',           // Cookie value.
  hiddenClass:  'hidden',             // Class to toggle to hide/show the element.
  rejectButton: 'div.cookie-consent button[name="reject"]', // Selector for the button which rejects cookies.
  acceptButton: 'div.cookie-consent button[name="accept"]'  // Selector for the button which accept cookies. 
}
```

Just pass in a object with the properties you wish to change from the default and it will merge them and use the new properties.

## Examples

Check the [`example/`](https://gitlab.com/jitesoft/open-source/javascript/cookie-consent/tree/master/example) directory.
