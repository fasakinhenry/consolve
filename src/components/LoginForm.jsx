// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

const LoginForm = ({ stage, onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 1500);
  };

  const renderInput = (name, placeholder) => (
    <div className='mb-4 relative'>
      <input
        type={name === 'email' ? 'email' : 'text'}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-full bg-transparent border-b-2 border-gray-700 text-white focus:outline-none focus:border-[#fdca3a] pb-2'
        required
      />
      {formData[name] && (
        <FaCheckCircle className='absolute right-2 top-2 text-green-500' />
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-6 text-white'>
        Share a bit more about you
      </h2>
      <p className='text-gray-400 mb-8'>
        From time to time, we will reach out with projects, opportunities, and
        connections
      </p>

      {stage === 1 && (
        <>
          {renderInput('name', 'Full Name')}
          {renderInput('email', 'Email')}
          {renderInput('location', 'Location')}
        </>
      )}

      {stage === 2 && (
        <>
          <button className='w-full py-2 bg-blue-600 text-white rounded-lg mb-4 flex items-center justify-center'>
            <img
              src='/linkedin-icon.png'
              alt='LinkedIn'
              className='mr-2 h-5 w-5'
            />
            Import LinkedIn Bio
          </button>
          {renderInput('twitter', 'https://twitter.com/username')}
          {renderInput(
            'stackoverflow',
            'https://stackoverflow.com/users/id/username'
          )}
        </>
      )}

      <div className='flex items-center justify-between mt-6'>
        <button
          type='submit'
          className={`bg-[#fdca3a] text-black py-2 px-4 rounded-lg flex items-center ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin'></div>
          ) : (
            'Next'
          )}
        </button>
        <FaMapMarkerAlt className='text-[#fdca3a] text-xl cursor-pointer' />
      </div>
    </form>
  );
};

export default LoginForm;
