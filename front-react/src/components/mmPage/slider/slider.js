import React from 'react';
import Swiper from 'react-id-swiper';

import 'react-id-swiper/lib/styles/css/swiper.css';


const CoverflowEffect = () => {
    const params = {
      initialSlide :2,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 2,
      keyboard : true,
      mousewheel: true,
      loop : true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,

      },
      coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable :true,

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
    return (
      <div className="slider">
        <Swiper {...params} >
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
