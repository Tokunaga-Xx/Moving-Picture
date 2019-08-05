import React from 'react';
import Swiper from 'react-id-swiper';

import 'react-id-swiper/lib/styles/css/swiper.css';

const CoverflowEffect = () => {
    const params = {
      initialSlide: 1,
      direction: 'vertical',
      slidesPerView : 'auto',
      spaceBetween: 30,
      virtualTranslate : true,
      
    }


    
    return (
      <div className="vertical-slider">
        <Swiper {...params} >
          <div className={'img'}>
            
          </div>
          <div className={'img'}>
            
          </div>
          <div className={'img'}>
            
          </div>
          <div className={'img'}>
            
          </div>
        </Swiper>
      </div>
    )
    
  };


  export default CoverflowEffect;