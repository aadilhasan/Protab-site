import React from 'react';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img alt="protab logo" src={require('./logo.png')} />
        </div>
        ProTab
      </div>
      <div className="hidden md:block">
        <a
          alt=""
          href="https://chrome.google.com/webstore/detail/protab/jbfnkcpnlnedmfafgpcidgdfkkikgmbn"
        >
          <Button size="lg">Download for chrome</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
