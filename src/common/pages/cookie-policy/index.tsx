import Layout from '@theme/Layout';
import React, { useEffect } from 'react';

export default function CookiePolicy() {
  useEffect(() => {

    const appendCookiebotCdReport = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
      script.async = true;
      script.src =
        'https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cdreport.js?referer=iota-wiki-fawn.vercel.app';
    });

    const appendCookiebotDeclaration = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = 'CookieDeclaration';
      script.src =
        'https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js';
      script.type = 'text/javascript';
      script.async = true;
      const cookieDeclarationWrapper = document.getElementById('cookie-declaration-wrapper');
      document.getElementsByClassName('CookieDeclaration')
      cookieDeclarationWrapper.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
    });

    appendCookiebotCdReport.then(() => {
      console.log('appendCookiebotCdReport Loaded')
      appendCookiebotDeclaration.then(() => {
        console.log('appendCookiebotDeclaration Loaded')
        const cookieDeclarations = document.getElementsByClassName('CookieDeclaration')
        // Remove all duplicates
        if (cookieDeclarations?.length > 1) {
          for (let i = 1; i < cookieDeclarations.length; i++) {
            cookieDeclarations[i].remove();
          }
        }
      }).catch((error) => {
        console.error(error)
      });
    }).catch((error) => {
      console.error(error)
    })
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
