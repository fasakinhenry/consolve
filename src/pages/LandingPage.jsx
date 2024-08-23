import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import TwitterFeed from '../components/TwitterFeed';

const LandingPage = () => {
  const tweets = [
    {
      text: "Tuliban has completely transformed how I approach software development. It's revolutionary!",
      author: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://via.placeholder.com/48',
    },
    {
      text: "Tuliban has completely transformed how I approach software development. It's revolutionary!",
      author: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://via.placeholder.com/48',
    },
    {
      text: "Tuliban has completely transformed how I approach software development. It's revolutionary!",
      author: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://via.placeholder.com/48',
    },
    {
      text: "Tuliban has completely transformed how I approach software development. It's revolutionary!",
      author: 'Jane Doe',
      username: 'janedoe',
      avatar: 'https://via.placeholder.com/48',
    },
    // Add more tweets here
  ];

  return (
    <MainLayout>
      <Hero />
      <Section title='Empower Developers. Democratize Software' centered>
        <p className='text-xl mb-8'>
          Create an open marketplace for software development, empowering
          developers to build scalable solutions for global impact.
        </p>
      </Section>
      <Section title='Unleashing the Creator in Every Developer'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <FeatureCard
            title='Become a Creator'
            description='The future belongs to software creators. Tap into a global talent pool to build scalable solutions faster than ever before.'
            linkText='Learn More'
            image='/become-creator.png'
          />
          <FeatureCard
            title='Discover Opportunities'
            description='Connect with a global marketplace of software development opportunities and innovative projects.'
            linkText='Explore More'
            image='/discover-opportunities.png'
          />
          <FeatureCard
            title='Build At Scale'
            description='Leverage our platform to build complex software solutions with ease, accessing top talent worldwide.'
            linkText='Start Building'
            image='/build-at-scale.png'
          />
        </div>
      </Section>
      <Section title='What Devs Are Saying About Us'>
        <TwitterFeed tweets={tweets} />
      </Section>
      <Section>
        <div className='bg-[#fdca3a] text-black p-8 rounded-lg text-center'>
          <h2 className='text-3xl font-semibold mb-4'>
            Start Your Journey Today!
          </h2>
          <p className='mb-6'>
            Join thousands of developers redefining how software is built.
            Experience the power of global collaboration.
          </p>
          <a
            href='#'
            className='bg-black text-[#fdca3a] px-6 py-3 rounded-full hover:bg-gray-800'
          >
            Get Started
          </a>
        </div>
      </Section>
    </MainLayout>
  );
};

export default LandingPage;
