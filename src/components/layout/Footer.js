import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex justify-center text-center">
      <div>
        <h2 className="text-lg font-semibold">Contacts</h2>
        <p className="mt-1">realequityapps@gmail.com</p>
      </div>
    </div>
    <div className="flex justify-center text-center mt-4 text-xs text-gray-600">
      Google Play and the Google Play logo are trademarks of Google LLC.
    </div>
    <div className="flex justify-center text-center mt-4 text-xs text-gray-600">
      <a className="mr-1 ml-1" href="/terms-and-conditions">Terms</a>-
      <a className="ml-1 mr-1" href="/privacy-policy">Privacy Policy</a>
    </div>
  </footer>
);

export default Footer;
