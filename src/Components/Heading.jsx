import React from "react";
import './heading.css'

const Heading = ({ start, end, color, col }) => {
  return (
    <div>
      <h2
        className={` ${
          color === "blue" ? "title1" : "newtitle1"
        } mx-auto flex justify-center ${col?'flex-col':''} md:flex-row text-4xl md:text-6xl py-20 text-center`}
      >
        {start} &nbsp;<span>{end}</span>
      </h2>
    </div>
  );
};

export default Heading;
