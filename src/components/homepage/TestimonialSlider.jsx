"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TestimonialSlider = ({ testimonialItems }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      speed={1000}
      className="mySwiper"
    >
      {testimonialItems.map((item, index) => (
        <SwiperSlide key={index} className="text-center">
          <p className="md:text-lg text-base leading-[144.444%] text-fantastic font-medium">
            {item.descriptions}
          </p>
          <h4 className="md:text-lg text-base leading-[144.444%] text-black font-medium mt-6 mb-2">
            {item.personName}
          </h4>
          <h5 className="text-black md:text-base text-sm leading-[133.333%] font-medium">
            {item.post}
          </h5>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
