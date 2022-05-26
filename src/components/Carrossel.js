import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Carrossel() {
  return (
    <Carousel
      className='gallery--content'
      emulateTouch={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={15000}
      showStatus={false}>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/700x700/?kids" alt='kids playing' />
      </div>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/701x701/?kids" alt='kids playing' />
      </div>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/702x702/?kids" alt='kids playing' />
      </div>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/703x703/?kids" alt='kids playing' />
      </div>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/704x704/?kids" alt='kids playing' />
      </div>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/705x705/?kids" alt='kids playing' />
      </div>
      <div className='image--container'>
        <img src="https://source.unsplash.com/random/706x706/?kids" alt='kids playing' />
      </div>
    </Carousel>
  );
}