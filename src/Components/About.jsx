import React from "react";
import Heading from "./Heading";
import { FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="max-w-screen-lg my-20 mx-auto" id="about">
        <Heading start={"About"} end={"Meraki"} color={"blue"} />
        {/* <h1 className='text-theme-blue text-6xl text-center font-semibold'>About Meraki</h1> */}
        <div className="flex justify-around -mt-16">
          <FaHandsHelping size={400} className="text-theme-blue"/>
          <div className="text-2xl my-auto font-semibold ml-16">
            WE ARE LOOKING TO PROVIDE HELP TO 10 SEMI-RURAL AND SEMI-URBAN
            STARTUP
          </div>
        </div>
        <div className="!flex justify-between -mt-24">
          <div className="text-2xl my-auto font-semibold px-5">
            WE ARE LOOKING TO PROVIDE HELP TO 10 SEMI-RURAL AND SEMI-URBAN
            STARTUP
          </div>
          <FaHandsHelping size={400} className="text-theme-blue"/>
        </div>
      </div>
    </>
  );
};

export default About;
