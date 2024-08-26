// src/components/LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ stage, onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const renderInput = (name, placeholder) => (
    <div className="mb-6 relative">
      <input
        type={name === 'email' ? 'email' : 'text'}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-[#1a1a1a] border-b-2 border-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#fdca3a] transition-colors duration-300"
        required
      />
      {formData[name] && (
        <span className="absolute right-3 top-3 text-green-500">✓</span>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="text-white">
      <h2 className="text-2xl font-bold mb-6">Share a bit more about you</h2>
      <p className="text-gray-400 mb-8">From time to time, we will reach out with projects, opportunities, and connections</p>
      
      {stage === 1 && (
        <>
          {renderInput('name', 'Full Name')}
          {renderInput('email', 'Email')}
          {renderInput('location', 'Location')}
        </>
      )}
      
      {stage === 2 && (
        <>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg mb-4 flex items-center justify-center">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="mr-2 h-5 w-5" />
            Import LinkedIn Bio
          </button>
          {renderInput('twitter', 'https://twitter.com/username')}
          {renderInput('stackoverflow', 'https://stackoverflow.com/users/id/username')}
        </>
      )}
      
      <button
        type="submit"
        className={`w-full py-2 mt-4 text-black rounded-lg transition duration-300 ${Object.values(formData).some(field => !field) ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#fdca3a] hover:bg-yellow-500 cursor-pointer'}`}
        disabled={Object.values(formData).some(field => !field)}
      >
        Next
      </button>
    </form>
  );
};

export default LoginForm;
