import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Blog from "@/components/homepage/Blog";
import Contact from "@/components/homepage/Contact";
import DiscussYourProject from "@/components/homepage/DiscussYourProject";
import ExperienceDesigner from "@/components/homepage/ExperienceDesigner";
import HappyClients from "@/components/homepage/HappyClients";
import Hero from "@/components/homepage/Hero";
import Portfolio from "@/components/homepage/Portfolio";
import Testimonial from "@/components/homepage/Testimonial";
import WhatIdo from "@/components/homepage/WhatIdo";
import WorkProcess from "@/components/homepage/WorkProcess";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden">
        <div className="bg-seafoam blur-[300px] rounded-full w-[1044px] h-[10%] rotate-[-130.444deg] absolute -right-1/2 top-1/2 z-[-10]pointer-events-none"></div>
        <Hero />
        <ExperienceDesigner />
      </div>
      <WorkProcess />
      <Portfolio />
      <DiscussYourProject />
      <Blog />
      <WhatIdo />
      <HappyClients />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
