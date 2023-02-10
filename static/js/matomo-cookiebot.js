var waitForTrackerCount = 0;

function matomoWaitForTracker() {
  if (typeof _paq === 'undefined' || typeof Cookiebot === 'undefined') {
    if (waitForTrackerCount < 40) {
      setTimeout(matomoWaitForTracker, 250);
      waitForTrackerCount++;
      return;
    }
  } else {
    _paq.push(['requireConsent']);
    window.addEventListener('CookiebotOnAccept', function () {
      consentSet();
    });
    window.addEventListener('CookiebotOnDecline', function () {
      consentSet();
    });
  }
}
function consentSet() {
  if (Cookiebot.consent.statistics) {
    _paq.push(['setCookieConsentGiven']);
    _paq.push(['setConsentGiven']);
  } else {
    _paq.push(['forgetCookieConsentGiven']);
    _paq.push(['forgetConsentGiven']);
  }
}
document.addEventListener('DOMContentLoaded', matomoWaitForTracker());
