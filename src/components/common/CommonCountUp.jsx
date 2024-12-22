"use client";
import React from "react";
import CountUp from "react-countup";

const CommonCountUp = ({ start, end, className }) => {
  return (
    <div>
      <CountUp className={`${className}`} start={start} end={end} />
    </div>
  );
};

export default CommonCountUp;
