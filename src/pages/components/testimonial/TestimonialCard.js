import React from 'react';

const TestimonialCard = ({ item }) => {
  return (
    <figure className='relative pr-5 pb-5'>
      {/* Image */}
      <img
        className='w-full rounded-lg object-cover drop-shadow-md'
        src={item.src}
        alt={item.name}
      />
      {/* Content */}
      <figcaption className='absolute left-0 right-0 bottom-5 mr-5 rounded-lg bg-gradient-to-t from-black pb-5 text-white'>
        <p className='mx-5 mb-3 font-semibold'>{item.text}</p>
        <p className='mx-5 font-allison text-[32px]'>{item.author}</p>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
