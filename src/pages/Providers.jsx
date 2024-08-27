import React, { useState } from 'react';
import { SearchNormal, Filter, Star, Heart, Message } from 'iconsax-react';

// Mock data for providers
const providers = [
  {
    id: 1,
    name: 'ElectricPro Solutions',
    category: 'Electrical',
    rating: 4.8,
    reviews: 127,
    description:
      'Expert electrical services for residential and commercial needs.',
    image: '/profile2.jpg',
  },
  {
    id: 2,
    name: 'PlumbMaster',
    category: 'Plumbing',
    rating: 4.7,
    reviews: 98,
    description: '24/7 plumbing services with guaranteed satisfaction.',
    image: '/profile2.jpg',
  },
  {
    id: 3,
    name: 'GreenThumb Landscaping',
    category: 'Landscaping',
    rating: 4.9,
    reviews: 156,
    description:
      'Transform your outdoor space with our expert landscaping team.',
    image: '/profile2.jpg',
  },
  // Add more mock providers as needed
];

const featuredProviders = providers.slice(0, 3); // Use the first 3 providers as featured

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProviders = providers.filter(
    (provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || provider.category === selectedCategory)
  );

  return (
    <div className='bg-[#121212] text-white min-h-screen p-6'>
      <h1 className='text-3xl font-bold mb-6'>Find Service Providers</h1>

      {/* Search and Filter Section */}
      <div className='flex flex-col md:flex-row gap-4 mb-8'>
        <div className='relative flex-grow'>
          <input
            type='text'
            placeholder='Search for providers...'
            className='w-full bg-[#2d2d2d] text-white p-3 pl-10 rounded-lg'
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchNormal className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
        <div className='relative'>
          <select
            className='bg-[#2d2d2d] text-white p-3 pr-10 rounded-lg appearance-none'
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value=''>All Categories</option>
            <option value='Electrical'>Electrical</option>
            <option value='Plumbing'>Plumbing</option>
            <option value='Landscaping'>Landscaping</option>
            {/* Add more categories as needed */}
          </select>
          <Filter className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
      </div>

      {/* Featured Providers Section */}
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Featured Providers</h2>
        <div className='flex overflow-x-auto gap-4 pb-4'>
          {featuredProviders.map((provider) => (
            <div
              key={provider.id}
              className='flex-shrink-0 w-64 bg-[#1e1e1e] rounded-lg p-4'
            >
              <img
                src={provider.image}
                alt={provider.name}
                className='w-full h-32 object-cover rounded-lg mb-3'
              />
              <h3 className='font-semibold'>{provider.name}</h3>
              <p className='text-sm text-gray-400 mb-2'>{provider.category}</p>
              <div className='flex items-center'>
                <Star className='text-yellow-400 mr-1' size={16} />
                <span>{provider.rating}</span>
                <span className='text-gray-400 text-sm ml-2'>
                  ({provider.reviews} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Providers Section */}
      <div>
        <h2 className='text-2xl font-semibold mb-4'>All Providers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProviders.map((provider) => (
            <div key={provider.id} className='bg-[#1e1e1e] rounded-lg p-4 flex'>
              <img
                src={provider.image}
                alt={provider.name}
                className='w-24 h-24 object-cover rounded-lg mr-4'
              />
              <div className='flex-grow'>
                <h3 className='font-semibold'>{provider.name}</h3>
                <p className='text-sm text-gray-400 mb-2'>
                  {provider.category}
                </p>
                <p className='text-sm mb-2'>{provider.description}</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Star className='text-yellow-400 mr-1' size={16} />
                    <span>{provider.rating}</span>
                    <span className='text-gray-400 text-xs ml-1'>
                      ({provider.reviews})
                    </span>
                  </div>
                  <div className='flex gap-2'>
                    <button className='p-1 bg-[#2d2d2d] rounded-full'>
                      <Heart size={16} />
                    </button>
                    <button className='p-1 bg-[#2d2d2d] rounded-full'>
                      <Message size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Request Button */}
      <button className='fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors sm:w-full'>
        Make a Service Request
      </button>
    </div>
  );
};

export default Providers;
