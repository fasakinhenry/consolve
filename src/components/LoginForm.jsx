import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if all fields are filled
    const allFilled = Object.values({ ...formData, [name]: value }).every(
      (field) => field !== ''
    );
    setIsFormValid(allFilled);
  };

  return (
    <form className='space-y-6'>
      <h2 className='text-3xl font-bold mb-4'>Share a bit more about you</h2>
      <p className='text-gray-400 mb-6'>
        From time to time, we will reach out with projects, opportunities, and
        connections.
      </p>

      {Object.keys(formData).map((field, index) => (
        <div key={index} className='relative'>
          <input
            type='text'
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className='w-full border-b-2 border-gray-600 bg-transparent py-2 text-white placeholder-gray-500 outline-none focus:border-yellow-500'
          />
          {formData[field] && (
            <span className='absolute right-0 top-0 text-green-500 mt-2'>
              &#10003;
            </span>
          )}
        </div>
      ))}

      <button
        type='submit'
        className={`w-full py-2 mt-4 text-center text-black bg-yellow-400 rounded ${
          !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!isFormValid}
      >
        Next
      </button>
    </form>
  );
};

export default LoginForm;
