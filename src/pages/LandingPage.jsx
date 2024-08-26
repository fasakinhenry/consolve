import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import TwitterFeed from '../components/TwitterFeed';

const LandingPage = () => {
  const tweets = [
    {
      text: "This app has made connecting with local services incredibly easy. I can't imagine life without it now!",
      author: 'John Smith',
      username: 'johnsmith',
      avatar: 'https://via.placeholder.com/48',
    },
    {
      text: 'Finding reliable services in my area has never been simpler. Highly recommended!',
      author: 'Emily Johnson',
      username: 'emilyjohnson',
      avatar: 'https://via.placeholder.com/48',
    },
    {
      text: 'A must-have for anyone looking to discover and connect with essential local services.',
      author: 'Michael Brown',
      username: 'michaelbrown',
      avatar: 'https://via.placeholder.com/48',
    },
    {
      text: 'The convenience of having all these services in one place is unmatched.',
      author: 'Sarah Wilson',
      username: 'sarahwilson',
      avatar: 'https://via.placeholder.com/48',
    },
    // Add more tweets here
  ];

  return (
    <MainLayout>
      <Hero />
      <Section title='Connecting Communities to Services' centered>
        <p className='text-xl mb-8'>
          Our app bridges the gap between people and essential services in their
          local communities, making life easier and more connected.
        </p>
      </Section>
      <Section title='How We Make a Difference'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <FeatureCard
            title='Find Local Services'
            description='Easily discover services near you, from healthcare to education, all in one place.'
            linkText='Learn More'
            image='/become-creator.png'
          />
          <FeatureCard
            title='Stay Informed'
            description='Access up-to-date information on the services available in your area and how to use them.'
            linkText='Explore More'
            image='/discover-opportunities.png'
          />
          <FeatureCard
            title='Connect Seamlessly'
            description='Connect directly with service providers to get the help you need quickly and easily.'
            linkText='Start Connecting'
            image='/build-at-scale.png'
          />
        </div>
      </Section>
      <Section title='What People Are Saying About Us'>
        <TwitterFeed tweets={tweets} />
      </Section>
      <Section>
        <div className='bg-[#fdca3a] text-black p-8 rounded-lg text-center'>
          <h2 className='text-3xl font-semibold mb-4'>
            Get Started with Our App Today!
          </h2>
          <p className='mb-6'>
            Join others in your community who are using our app to easily
            connect with local services. It’s fast, simple, and free.
          </p>
          <a
            href='#'
            className='bg-black text-[#fdca3a] px-6 py-3 rounded-full hover:bg-gray-800'
          >
            Start Now
          </a>
        </div>
      </Section>
    </MainLayout>
  );
};

export default LandingPage;
