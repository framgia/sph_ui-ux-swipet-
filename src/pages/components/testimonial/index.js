import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PreviousIcon from '../icons/PreviousIcon';
import NextIcon from '../icons/NextIcon';
import TestimonialCard from './TestimonialCard';

const Testimonial = ({ testimonialCaption }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line
  let sliderRef = useRef < Slider > null;

  const { name } = useParams('name');

  const settings = {
    className: 'hover:scale-95 py-5 duration-700',
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3.5,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <section className='bg-white pl-5 dark:bg-dark-ash-700 sm:px-0'>
      {/* Heading */}
      <div className='title-heading ml-0 mr-5 py-20 sm:mx-auto sm:w-[452px] xl:w-[660px]'>
        <h2 className='heading-size dark:text-orange-900'>
          {testimonialCaption || t('testimonialHeading')}
        </h2>
      </div>
      {/* Carousel */}
      <div className='z-0 pb-20 sm:pl-14 lg:pl-[200px]'>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {t('testimonials', { ns: 'testimonials' }).map(
            (item, index) => name !== item.author && <TestimonialCard key={index} item={item} />,
          )}
        </Slider>
        {/* Controls */}
        <button className='slider-control group' onClick={() => sliderRef.slickPrev()}>
          <PreviousIcon />
        </button>
        <button className='slider-control group' onClick={() => sliderRef.slickNext()}>
          <NextIcon />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
