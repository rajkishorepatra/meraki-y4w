import React from "react";
import Heading from "./Heading";
import StartupCard from "./StartupCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const Startups = () => {
  return (
    <>
      <div className="startupbg" id="startups">
        <Heading start={"Meet the"} end={"Startups"} color={"blue"} />
        <div
          style={{ padding: "5rem 2rem" }}
          className="mx-auto flex justify-center items-center"
        >
          <Swiper
            effect={"coverflow"}
            //   observer={"true"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={true}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="swiper py-5 mx-auto flex justify-center items-center"
          >
            <SwiperSlide className="swiper-slide">
              <StartupCard />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <StartupCard />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <StartupCard />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <StartupCard />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <StartupCard />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <StartupCard />
            </SwiperSlide>
          </Swiper>
          {/* </Box> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Startups;
