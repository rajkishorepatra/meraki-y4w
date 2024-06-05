import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Lottie from "react-lottie";
import { ABOUTUS } from "../Animations";

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
              We are looking to provide help to 10 semi-rural and semi-urban
              startups. Startups solving a problem concerning the objective of
              Youth4Water Plus, i.e., water, sanitation, and hygiene (WASH), and
              climate change. Our mission is to empower startups to address
              critical issues of Water, Sanitation, Hygiene, and Climate Change.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-blue flex justify-center flex-wrap">
        <img src="/assets/gallery1.jpeg" alt="gallery1" className="w-96 m-10" />
        <img src="/assets/gallery2.jpeg" alt="gallery1" className="w-96 m-10" />
        <img src="/assets/gallery3.jpeg" alt="gallery1" className="w-96 m-10" />
      </div>
    </>
  );
};

export default About;
