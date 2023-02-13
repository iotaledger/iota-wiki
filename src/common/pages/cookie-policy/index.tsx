import Layout from '@theme/Layout';
import React, { useEffect } from 'react';

export default function CookiePolicy() {
  // Why is this needed?
  // Injecting CookieBot as a global script in the HTML file
  // would make it load when the page loads instead of when the component is mounted
  // And this would make it error because it would not be able to find where to inject the declaration
  // So, we are injecting it twice, and just to be sure, we delete any extra cookie declaration,
  // as we only want to show one
  useEffect(() => {
    const appendCookiebotCdReport = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
      script.async = true;
      script.src =
        'https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cdreport.js?referer=wiki.iota.org';
    });

    const appendCookiebotDeclaration = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = 'CookieDeclaration';
      script.src =
        'https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js';
      script.type = 'text/javascript';
      script.async = true;
      const cookieDeclarationWrapper = document.getElementById(
        'cookie-declaration-wrapper',
      );
      document.getElementsByClassName('CookieDeclaration');
      cookieDeclarationWrapper.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
    });

    let interval = null;

    Promise.all([appendCookiebotCdReport, appendCookiebotDeclaration])
      .then(() => {
        const cookieDeclarations =
          document.getElementsByClassName('CookieDeclaration');
        interval = setInterval(() => {
          // Remove all duplicates
          if (cookieDeclarations?.length > 1) {
            for (let i = 1; i < cookieDeclarations.length; i++) {
              cookieDeclarations[i].remove();
            }
            clearInterval(interval);
          }
        }, 100);
      })
      .then(() => console.error('Cookiebot loaded'))
      .catch((err) => console.error(err));

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Layout>
        <div className='hero'>
          <div className='container'>
            <div className='text--center margin-bottom--lg'>
              <h1 className='hero__title margin--none'>Cookie Policy</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div id='cookie-declaration-wrapper'></div>
        </div>
      </Layout>
    </>
  );
}
