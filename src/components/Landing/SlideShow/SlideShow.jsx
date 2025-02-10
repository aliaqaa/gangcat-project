import React from "react";
import "../../../Styles/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SlideShow() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper container h-screen"
      >
        <SwiperSlide className="">
          <img
            src="/public/Images/Posts/thumb-1920-1354313.jpeg"
            alt="gang"
            className="grayscale-50 "
          />
        </SwiperSlide>
        
     
        <SwiperSlide className="">
          <img
            src="/public/Images/Posts/three-cats-wearing-sunglasses-hoodies-pose-photo-posing-all-fish-themed-which-gives-impression-dressed-343045656.webp"
            alt="gang"
            className="grayscale-50"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src="/public/Images/Posts/Leonardo_Lightning_XL_cats_with_thug_life_glass_and_golden_nec_2 (1).jpg"
            alt="gang"
            className="grayscale-50"
          />
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}

export default SlideShow;
