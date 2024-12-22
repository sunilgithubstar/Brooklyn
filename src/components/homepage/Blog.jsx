import React from "react";
import BlogCardSlider from "./BlogCardSlider";

const Blog = () => {
  return (
    <section className="container-modified py-[100px]">
      <div className="space-y-6 mb-[70px] max-w-[540px] w-full text-center mx-auto">
        <h2 className="heading text-fog">Blog</h2>
        <p className="sub-heading text-applause ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <BlogCardSlider />
    </section>
  );
};

export default Blog;
