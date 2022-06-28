import React from 'react';
import PetsDetails from './PetsDetails';
import PetsMyInfo from './PetsMyInfo';

const PetInfoTemplate = ({ data }) => (
  <div className='dark:bg-dark-ash-800'>
    <section className='px-5 pt-14 sm:px-8 md:px-14 xl:px-[200px] 2xl:px-[240px] 3xl:px-[320px]'>
      <PetsDetails getData={data} />
    </section>
    <hr className='border border-orange-900 dark:border-white' />
    <section className='px-5 pt-14 sm:px-8 md:px-14 xl:px-[200px] 2xl:px-[240px] 3xl:px-[320px]'>
      <PetsMyInfo getData={data.myInfo} />
    </section>
  </div>
);

export default PetInfoTemplate;
