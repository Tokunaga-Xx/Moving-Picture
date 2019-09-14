import React from "react";
import Swiper from "react-id-swiper";
import "react-id-swiper/lib/styles/css/swiper.css";
import long from "../../../images/long.svg";
import short from "../../../images/short1.svg";
import Score from "../Score/Score";

const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    initialSlide: 2,
    speed: 800,
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
          <div className="cover">
            <div className="row1">
              <h1>Boyhood</h1>
              <div className="coverside">
                <img src={short} alt="" />
                <img src={long} alt="" />
              </div>
            </div>
            <div className="row2">
              <Score score="9" />
            </div>
          </div>
        </div>
        <div className={"img2 imgarea"}>
          <div className="cover">
            <div className="row1">
              <h1>Hibana</h1>
              <div className="coverside">
                <img src={short} alt="" />
                <img src={long} alt="" />
              </div>
            </div>
            <div className="row2">
              <Score score="10" />
            </div>
          </div>
        </div>
        <div className={"img3 imgarea"}>
          <div className="cover">
            <div className="row1">
              <h1>Terrace House:Aloha State</h1>
              <div className="coverside">
                <img src={short} alt="" />
                <img src={long} alt="" />
              </div>
            </div>
            <div className="row2">
              <Score score="7" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CoverflowEffect;
