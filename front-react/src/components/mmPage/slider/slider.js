import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';


const CoverflowEffect = () => {
    const params = {
      effect: 'coverflow',
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
    return (
      <div className="slider">
        <Swiper {...params}>
          <div className={'img'} />
          <div className={'img'}/>
          <div className={'img'}/>
          <div className={'img'}/>
          <div className={'img'}/>
        </Swiper>
      </div>
    )
    
  };
  export default CoverflowEffect;
