import React from "react";
import BlogCardSlider from "./BlogCardSlider";

const Blog = () => {
  const BlogCard = [
    {
      id: 1,
      imgpath: "/images/png/slider-card-1.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 2,
      imgpath: "/images/png/slider-card-2.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 3,
      imgpath: "/images/png/slider-card-3.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 4,
      imgpath: "/images/png/slider-card-4.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 5,
      imgpath: "/images/png/slider-card-1.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 6,
      imgpath: "/images/png/slider-card-2.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 7,
      imgpath: "/images/png/slider-card-1.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 8,
      imgpath: "/images/png/slider-card-2.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 9,
      imgpath: "/images/png/slider-card-3.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 10,
      imgpath: "/images/png/slider-card-4.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 11,
      imgpath: "/images/png/slider-card-1.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
    {
      id: 12,
      imgpath: "/images/png/slider-card-2.png",
      date: "22 Oct, 2020",
      commentNumber: 246,
      description: "Lorem ipsum dolor sit consea. Nulla purus arcu",
    },
  ];
  return (
    <section className="container-modified py-[100px]">
      <div className="space-y-6 mb-[70px] max-w-[540px] w-full text-center mx-auto">
        <h2 className="heading text-fog">Blog</h2>
        <p className="sub-heading text-applause ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div>
        <BlogCardSlider items={BlogCard} />
      </div>
    </section>
  );
};

export default Blog;
