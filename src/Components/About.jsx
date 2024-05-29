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
      <div className="max-w-screen-2xl my-20 mt-5 mx-auto" id="about">
        <Heading start={"About"} end={"Meraki"} color={"blue"} />
        {/* <h1 className='text-theme-blue text-6xl text-center font-semibold'>About Meraki</h1> */}

        <div className={`flex justify-between ${width < 600 ? "flex-wrap" : ""}`}>
          <div className="flex justify-end mr-0 right-0 left-auto">
            <Lottie
              options={defaultOptions}
              isPaused={false}
              isClickToPauseDisabled={true}
              height={height}
              width={width}
            />
          </div>
          <div className="p-8 text-lg md:text-3xl my-auto font-sans normal-case tracking-wider [word-spacing:5px] md:mx-10">
            We are looking to provide help to 10 semi-rural and semi-urban
            startups. Startups solving a problem concerning the objective of
            Youth4Water Plus, i.e., water, sanitation, and hygiene (WASH), and
            climate change. Our mission is to empower startups to address
            critical issues of Water, Sanitation, Hygiene, and Climate Change.
          </div>
        </div>
        {/* <div className="flex justify-between">
          <Lottie
            options={defaultOptions}
            isPaused={false}
            isClickToPauseDisabled={true}
            height={400}
            width={400}
          />
          <div className="p-10">
            WE ARE LOOKING TO PROVIDE HELP TO 10 SEMI-RURAL AND SEMI-URBAN
            STARTUP. STARTUPS SOLVING A PROBLEM CONCERNING THE OBJECTIVE OF
            YOUTH4WATER PLUS i.e. WATER, SANITATION, AND HYGIENE (WASH) CLIMATE
            CHANGE
          </div>
        </div>
        <div className="flex justify-around -mt-16">
          <FaHandsHelping size={400} className="text-theme-blue" />
          <div className="text-2xl my-auto font-semibold ml-16">
            WE ARE LOOKING TO PROVIDE HELP TO 10 SEMI-RURAL AND SEMI-URBAN
            STARTUP.
          </div>
        </div>
        <div className="!flex justify-between -mt-24">
          <div className="text-2xl my-auto font-semibold px-5">
            WE ARE LOOKING TO PROVIDE HELP TO 10 SEMI-RURAL AND SEMI-URBAN
            STARTUP
          </div>
          <FaHandsHelping size={400} className="text-theme-blue" />
        </div> */}
      </div>
    </>
  );
};

export default About;
