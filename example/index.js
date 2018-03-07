import { CookieConsent } from 'cookie-sanction';

document.addEventListener('DOMContentLoaded', () => {
  const consent = new CookieConsent();
  consent.active().then((accepted) => {
    if (accepted) {
      document.querySelector('#state').innerText = 'User accepted!';
    } else {
      document.querySelector('#state').innerText = 'User rejected!';
    }
  }).catch((e) => {
    console.error(e);
  });
});
