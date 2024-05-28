import React from "react";

const Heading = ({ start, end, color }) => {
  return (
    <div>
      <h2
        className={` ${
          color === "blue" ? "title" : "newtitle"
        } mx-auto flex justify-center text-4xl md:text-6xl mt-10`}
      >
        {start} &nbsp;<span>{end}</span>
      </h2>
    </div>
  );
};

export default Heading;
