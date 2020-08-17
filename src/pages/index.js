import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
            AI-driven Rent Estimator
          </h1>
          <p className="text-l lg:text-xl mt-6 font-light text-gray-600">
            Estimates monthly rent for your property using machine learning
          </p>
          <div className="flex justify-center mt-6 md:mt-10 mb-16">
            <a href="https://play.google.com/store/apps/details?id=com.rentjudge&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img
                className="w-48 lg:w-64"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="/pictures/mockup_1.png" alt="screen_1" />
        </div>
      </div>
    </section>
  </Layout>
);
