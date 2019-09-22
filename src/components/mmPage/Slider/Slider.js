import React from "react";
import Swiper from "react-id-swiper";
import "react-id-swiper/lib/styles/css/swiper.css";
import long from "../../../images/long.svg";
import short from "../../../images/short1.svg";
import Score from "../Score/Score";
import Swal from "sweetalert2";

const CoverflowEffect = () => {
  const handleClick1 = () => {
    Swal.fire({
      showCloseButton: false,
      showConfirmButton: false,
      width: 1160,
      html: `<iframe width="1120" height="630" src="https://www.youtube.com/embed/Y0oX0xiwOv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  };
  const handleClick2 = () => {
    Swal.fire({
      showCloseButton: false,
      showConfirmButton: false,
      width: 1160,
      html: `<iframe width="1120" height="630" src="https://www.youtube.com/embed/nzp96RHZ4_4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  };
  const handleClick3 = () => {
    Swal.fire({
      showCloseButton: false,
      showConfirmButton: false,
      width: 1160,
      html: `<iframe width="1120" height="630" src="https://www.youtube.com/embed/woWAxQmpS3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  };
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
                <img src={long} alt="" onClick={handleClick1} />
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
                <img src={long} alt="" onClick={handleClick2} />
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
                <img src={long} alt="" onClick={handleClick3} />
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
