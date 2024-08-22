import React, { useRef, useEffect } from 'react';
import TwitterPost from './TwitterPost';

const TwitterFeed = ({ tweets }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let scrolling = true;

    const scrollContent = () => {
      if (scrolling) {
        scroll.scrollLeft += 1;
        if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
          scroll.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollContent, 30);

    scroll.addEventListener('mouseenter', () => (scrolling = false));
    scroll.addEventListener('mouseleave', () => (scrolling = true));

    return () => {
      clearInterval(intervalId);
      scroll.removeEventListener('mouseenter', () => (scrolling = false));
      scroll.removeEventListener('mouseleave', () => (scrolling = true));
    };
  }, []);

  return (
    <div ref={scrollRef} className='overflow-x-hidden whitespace-nowrap'>
      <div className='inline-flex'>
        {tweets.map((tweet, index) => (
          <div key={index} className='inline-block w-80 mr-4'>
            <TwitterPost {...tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;
