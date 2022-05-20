import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TestimonialMainContent from './TestimonialMainContent';

const TestimonialContentTemplate = ({ description }) => (
  <Fragment>
    <header className='flex px-[20px] pt-[64px] sm:px-[55px] sm:pt-[38px] lg:px-[100px] lg:pt-[51px] xl:px-[200px] 2xl:px-[339px]'>
      <LazyLoadImage src='/images/Avatar01.svg' alt='profile' className='h-[71px]' />
      <div className='ml-7'>
        <h1 className='text-[32px] text-navy-900'>{description.author}</h1>
        <p>{description.posted}</p>
      </div>
    </header>
    <main
      className='border-brown-90 border-b px-[20px]
          text-lg text-brown-900 sm:px-[55px] sm:pt-[38px] md:px-[50px] lg:px-[100px] lg:pt-[51px] xl:px-[200px] 2xl:px-[339px]'
    >
      <TestimonialMainContent description={description.description} altImage={description.author} />
    </main>
  </Fragment>
);

export default TestimonialContentTemplate;
