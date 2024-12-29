"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const BlogCardSlider = ({ items }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination]}
      speed={1000}
      className="mySwiper"
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="bg-white border border-lavendar rounded-lg"
        >
          <div className="relative w-full aspect-[312/226]">
            <Image
              className="object-cover rounded-t-lg"
              src={item.imgpath}
              alt={item.description || "Blog post image"}
              width={312}
              height={226}
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-applause text-sm leading-[142.857%]">
              <p>{item.date}</p>
              <span>/</span>
              <p>{item.commentNumber} Comments</p>
            </div>
            <h5 className="text-primary text-lg leading-[133.333%] font-medium mt-2">
              {item.description}
            </h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogCardSlider;
