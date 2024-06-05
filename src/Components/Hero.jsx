import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-hero-pattern scroll-smooth h-auto md:min-h-screen p-10 bg-cover bg-no-repeat -mt-5 text-center text-white inset-0 flex items-center justify-center flex-col">
        <div className="backdrop-brightness-50 w-auto py-10">
          <div className="max-w-screen-xl">
            <h1
              className="text-2xl md:text-7xl font-semibold"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            //  data-aos-anchor-placement="top-center"
            >
              <span className="text-theme-blue md:text-8xl">Meraki </span>-
              Empowering Startups for Sustainable Development
            </h1>
            <div
              className="line"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            ></div>
            <div
              className="md:text-4xl mb-10 font-medium md:px-10 text-gray-300"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Supporting semi-rural and semi-urban startups to tackle WASH and
              Climate Change challenges
            </div>
          </div>
          <a
            className="bg-theme-blue mt-10 px-3 py-2 text-lg rounded-md animate-pulse cursor-pointer"
            href="#about"
          >
            Discover more ↓
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
