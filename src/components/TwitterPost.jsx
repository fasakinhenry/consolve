import React from 'react';

const TwitterPost = ({ text, author, username, avatar }) => {
  return (
    <div className='bg-[#1a1a1a] p-6 rounded-lg'>
      <div className='flex items-center mb-4'>
        <img
          src={avatar}
          alt={author}
          className='w-12 h-12 rounded-full mr-4'
        />
        <div>
          <h4 className='font-semibold'>{author}</h4>
          <p className='text-gray-400'>@{username}</p>
        </div>
      </div>
      <p className='mb-4 whitespace-pre-wrap'>{text}</p>
      <div className='flex items-center text-gray-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 mr-2'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
        </svg>
        <span>Twitter for Web</span>
      </div>
    </div>
  );
};

export default TwitterPost;
