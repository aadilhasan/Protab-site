import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import heroImage from '../images/hero.png';
import SvgCharts from '../svg/SvgCharts';
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
            A productivity chrome extension
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light spa sub-heading">
            Boost your productivity with a highly customizable new tab. Have easy and fast access to
            all your productivity apps and much more.
          </p>
          {/* <p className="mt-8 md:mt-12">
            <a
              alt=""
              href="https://chrome.google.com/webstore/detail/protab/jbfnkcpnlnedmfafgpcidgdfkkikgmbn"
            >
              <Button size="lg">Download</Button>
            </a>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
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
              <div className="flex-1 px-4">
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
    {/* <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h4 className="text-5xl font-semibold">Are you ready to become more productive ? </h4>
      {/* <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p> */}
      <p className="mt-8">
        <div className="hidden md:block">
          <a
            alt=""
            href="https://chrome.google.com/webstore/detail/protab/jbfnkcpnlnedmfafgpcidgdfkkikgmbn"
          >
            <Button size="lg">Download ProTab now for chrome</Button>
          </a>
        </div>
      </p>
    </section>
  </Layout>
);
