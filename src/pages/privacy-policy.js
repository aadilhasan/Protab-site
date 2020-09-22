import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';

import './styles.css';

export default () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <section className="p-10 privacy container">
      <div className="col-md-8 term-wrapper">
        <h2 className="text-center"> Privacy Policy </h2>
        <div>
          <h3>
            Your privacy is critically important to us. At{' '}
            <a href="https://getprotab.com">ProTab</a> We have a few fundamental principles:
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
  </Layout>
);
