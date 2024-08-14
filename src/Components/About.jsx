import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Lottie from "react-lottie";
import { ABOUTUS } from "../Animations";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
// import Image1 from '/assets/gallery1.jpeg';
// import Image2 from '/assets/gallery2.jpg';
// import Image3 from '/assets/gallery3.jpeg';
// import Image4 from '/assets/gallery4.jpeg';
// import Image5 from '/assets/gallery5.jpeg';
// import Image6 from '/assets/gallery6.jpeg';
// import Image7 from '/assets/gallery7.jpeg';
// import Image8 from '/assets/gallery8.jpeg';
// import Image9 from '/assets/gallery9.jpeg';

const About = () => {
  const [width, setWidth] = useState(650);
  const [height, setHeight] = useState(550);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ABOUTUS,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (window.screen.width < 600) {
        setHeight(300);
        setWidth(350);
      }
    }
  }, []);
  return (
    <>
      <div className="startupbg">
        <div className="max-w-screen-2xl md:pb-16 mx-auto scroll-smooth" id="about">
          <Heading start={"About"} end={"Meraki"} color={"blue"} />
          {/* <h1 className='text-theme-blue text-6xl text-center font-semibold'>About Meraki</h1> */}

          <div className={`flex justify-center py-14 flex-wrap lg:flex-nowrap`}>
            <div className="flex justify-center mx-auto lg:mr-0 md:right-0 md:left-auto my-auto">
              <Lottie
                options={defaultOptions}
                isPaused={false}
                isClickToPauseDisabled={true}
                height={height}
                width={width}
              />
            </div>
            <div className="p-8 text-lg md:text-3xl my-auto font-sans normal-case tracking-wider ">
              We are looking to provide help to 8 semi-rural and semi-urban
              startups. Startups solving a problem concerning the objective of
              Youth4Water Plus, i.e., water, sanitation, and hygiene (WASH), and
              climate change. Our mission is to empower startups to address
              critical issues of Water, Sanitation, Hygiene, and Climate Change.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-blue pt-28 pb-20 px-8">
        <ImageSlider />

        <div className="mb-5 mt-14 mx-auto flex justify-center">
          <div>
            <h1 className="text-5xl font-medium text-center">Want to register on&nbsp;<i><span className="font-semibold text-white">Meraki</span></i>&nbsp;?</h1>
            <div className="w-auto mx-auto flex items-center justify-center mt-10"><a
              href="https://forms.gle/W1oyYGAznbfWpVan9"
              className=" !py-1 w-auto text-xl  !px-7 text-gray-900 rounded bg-white !hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Click here!
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ImageSlider = ({ direction }) => {
  return (
    // <Box className="ocoyImageSlider">
    <>
      <Swiper
        dir={direction == "rtl" ? "rtl" : "ltr"}
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={'/assets/gallery1.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery2.jpg'} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={'/assets/gallery3.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery4.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery5.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery6.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery7.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery8.jpeg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'/assets/gallery9.jpeg'} alt="" />
        </SwiperSlide>
      </Swiper>
      {/* </Box> */}
    </>
  );
};

export default About;
