import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  informationLinks,
  socialMediaLinks,
} from '../../../utilities/constants';

const FooterContent = () => {
  return (
    <div className='flex flex-col px-[20px] text-brown-900 sm:px-[20px] md:px-[55px] lg:px-[200px]'>
      <div className='flex flex-col items-center justify-between sm:gap-12 md:flex-row'>
        <div className='mt-7 flex w-[300px] flex-col items-center justify-center pb-6 md:mt-3 md:w-[250px] md:items-start md:pb-12'>
          <Link to='/'>
            <LazyLoadImage
              src='/images/LogoDarkFit.svg'
              alt='LogoDark'
              className='h-12 w-48'
            />
          </Link>
          <p className='mt-8 text-center md:text-left'>
            Swipet is a mobile application that makes pet adoption fun and
            easier.
          </p>
        </div>
        <div className='w-[300px]sm:w-[148px] flex flex-col items-center justify-center py-8 sm:pl-[30px] md:mt-[40px] md:items-start xl:mt-[57px]'>
          <div className='text-2xl font-bold'>Information</div>
          {informationLinks.map((item, i) => (
            <Link
              key={i}
              className={`${
                i === 0 ? 'mt-7' : 'mt-2'
              }  mb-2 hover:text-orange-700`}
              to={item.to}
              target='_blank'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center py-8 md:items-start'>
          <div className='text-2xl font-bold '>Contact</div>
          <div className='mt-7'>+63-905-478-9285</div>
          <div className='mt-2 mb-2'>swipet.contact@sun-asterisk.com</div>
          <div>Don Gil Garcia St, Cebu City</div>
        </div>
      </div>
      <hr />
      <div className='my-11 flex flex-col items-center justify-between gap-10 md:flex-row'>
        <div className='flex w-80 justify-center gap-12 md:justify-start'>
          {socialMediaLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
            >
              <LazyLoadImage
                src={item.src}
                className='h-6 hover:contrast-50'
                alt={item.alt}
              />
            </a>
          ))}
        </div>
        <p className='w-[365px]'>
          Copyright © 2022 Swipet, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
