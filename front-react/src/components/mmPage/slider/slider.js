import React from "react";
import Swiper from "react-id-swiper";
import "react-id-swiper/lib/styles/css/swiper.css";

const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    initialSlide: 2,
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    loop: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    coverflowEffect: {
      rotate: 0,
      stretch: -50,
      depth: 600,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  return (
    <div className="slider">
      <Swiper {...params} className="slider">
        <div className={"img1 imgarea"}>
          <h1>Boyhood</h1>
        </div>
        <div className={"img2 imgarea"}>
          <h1>Hibana</h1>
        </div>
        <div className={"img3 imgarea"}>
          <h1>Terrace House : Aloha State</h1>
        </div>
      </Swiper>
    </div>
  );
};

export default CoverflowEffect;

// const CoverflowEffect = () => {
//   const params = {
//     effect: "coverflow",
//     speed: 1000,
//     initialSlide: 1,
//     centeredSlides: true,
//     slidesPerView: 2,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       stopOnLastSlide: false,
//       disableOnInteraction: false
//     },
//     coverflowEffect: {
//       rotate: 0,
//       stretch: -50,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true
//     },
//     pagination: {
//       el: ".swiper-pagination"
//     }
//   };
//   return (
//     <div className="slider">
//       <Swiper {...params}>
//         <div className="imgarea img1" />
//         <div className="imgarea img2" />
//         <div className="imgarea img3" />
//       </Swiper>
//     </div>
//   );
// };

// export default CoverflowEffect;
