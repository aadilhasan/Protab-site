import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import './styles.css';

const features = [
  {
    title: 'Collections',
    details: 'Save browser sessions, create custom bookmarks',
    link: 'https://www.youtube.com/watch?v=3HD6IlDf7gQ'
  },
  {
    title: 'Todos',
    details: 'Create tasks, add deadline and get get alerts and notification of deadline',
    link: 'https://www.youtube.com/watch?v=UOKQ_5k3fzM'
  },
  {
    title: 'Tab Switcher',
    details: 'Manage your open tabs and windows with ease',
    link: 'https://www.youtube.com/watch?v=xAXHx6ef3Kg'
  },
  {
    title: 'Notes',
    details: 'A feature packed note app. Add images, videos and much more',
    link: ''
  },
  {
    title: 'Read Laters',
    details: 'Add any page directly to the read later, and stay focused with your research',
    link: 'https://www.youtube.com/watch?v=E_zRX5vS9No'
  },
  {
    title: 'Quick Links ',
    details: 'Add your favourite links directly to the quick link, and have easy access to them',
    link: ''
  }
];

export default () => (
  <Layout>
    <section className="pt-20">
      <div className="container mx-auto px-8 lg:flex lg:flex-col">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none heading">
            The best productivity extension
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light spa sub-heading">
            Boost your productivity with a highly customizable new tab. Have easy and fast access to
            all your productivity apps and much more.
          </p>
          <p className="mt-8 md:mt-12 hidden download">
            <a
              alt=""
              href="https://chrome.google.com/webstore/detail/protab/jbfnkcpnlnedmfafgpcidgdfkkikgmbn"
            >
              <Button size="lg">Download</Button>
            </a>
          </p>
        </div>
        <div className="demo">
          <iframe
            title="protab demo"
            src="https://www.youtube.com/embed/rPfnC8sP_yc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="feature-list sm:flex-row sm:-mx-3 mt-12">
          {features.map(feature => {
            return (
              <div className="px-4">
                <Card>
                  <p className="font-semibold text-xl">{feature.title}</p>
                  <p className="mt-4">{feature.details}</p>
                  {feature.link && <a href={feature.link}> DEMO </a>}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h4 className="text-5xl font-semibold">Are you ready to become more productive ? </h4>
      <p className="mt-8">
        <div>
          <a
            alt=""
            href="https://chrome.google.com/webstore/detail/protab/jbfnkcpnlnedmfafgpcidgdfkkikgmbn"
          >
            <Button size="lg">Download Protab</Button>
          </a>
        </div>
      </p>
    </section>
  </Layout>
);
