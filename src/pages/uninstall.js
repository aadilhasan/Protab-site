import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';

import './styles.css';

export default () => (
  <Layout>
    <SEO />
    <section className="pt-10">
      <iframe
        className="uninstall-feedback-form"
        title="Protab uninstall feeback"
        src="https://docs.google.com/forms/d/e/1FAIpQLScZut6gi8ncEHj6X7lQqFh5GhPNQVGR49j6Uil4nIUafJqsEg/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        <h2>Loading…</h2>
      </iframe>
    </section>
  </Layout>
);
