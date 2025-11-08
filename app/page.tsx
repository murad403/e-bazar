import React from 'react';
import Banner from './home/Banner';
import TopRated from './home/TopRated';

const page = () => {
  return (
    <div className='space-y-10'>
      <Banner></Banner>
      <TopRated></TopRated>
    </div>
  );
};

export default page;