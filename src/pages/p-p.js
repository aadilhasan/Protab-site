import React from 'react';
import SEO from '../components/Seo';
import Footer from '../components/layout/Footer';

import './styles.css';

export default () => (
  <div>
    <SEO title="Privacy Policy" />
    <div className="pt-10 pl-10">
      <a href="https://getprotab.com" className="flex items-center text-2xl text-black">
        <div className="w-12 mr-3">
          <img alt="protab logo" src={require('../logo.png')} />
        </div>
        ProTab
      </a>
    </div>
    <section className="p-10 privacy container">
      <div className="col-md-8 term-wrapper">
        <h2 className="text-center"> Privacy Policy </h2>
        <div>
          <h3>
            Your privacy is critically important to us. At{' '}
            <a href="https://getprotab.com">ProTab</a> we have a few fundamental principles:
          </h3>
          <ul>
            <li> We don't monitor or save data of the sites you visit. </li>
            <li>
              We don't save any kind user data but user email, all of your data is saved locally in
              your browser.
            </li>
            <li> We don't share your information or data with anyone.</li>
          </ul>
        </div>
      </div>
    </section>
    <div className="pl-10 pr-10">
      <Footer />
    </div>
  </div>
);
