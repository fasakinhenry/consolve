import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Section from '../components/Section';

const LandingPage = () => {
  return (
    <MainLayout>
      <Section title='Empower Communities. Democratize Access.'>
        <p>
          Create an open platform to connect users with essential services,
          improving accessibility and fostering community development.
        </p>
      </Section>
      <Section title='What Users Are Saying About Us' dark>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='mb-4'>
              “This platform redefined local service connectivity for our
              community. It's amazing!”
            </p>
            <h4 className='text-yellow-400 font-bold'>Adewale Green</h4>
          </div>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='mb-4'>
              “Our business saw immense growth thanks to the easy service
              access.”
            </p>
            <h4 className='text-yellow-400 font-bold'>Seyi Adebayo</h4>
          </div>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='mb-4'>
              “Finally, a platform that makes accessing essential services a
              breeze.”
            </p>
            <h4 className='text-yellow-400 font-bold'>Lara Akinwale</h4>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
};

export default LandingPage;
