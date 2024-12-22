import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import SuccessNumbers from "../common/SuccessNumbers";
import Image from "next/image";

const Hero = () => {
  const statsData = [
    { id: 1, value: "15", icons: "Y.", description: "Experience" },
    { id: 2, value: "250", icons: "+", description: "Projects" },
    { id: 3, value: "58", icons: "", description: "Happy Client" },
  ];
  return (
    <section className="relative ">
      <div className="bg-lilac blur-[300px] rounded-full w-[871px] h-[40%] rotate-[-130.444deg] absolute right-0 -top-1/2 z-[-10] pointt"></div>

      <div className="container-modified 2xl:mt-[126px] xl:mt-[100px] lg:mt-20 md:mt-16 mt-10 2xl:mb-[212px] xl:mb-[160px] lg:mb-[100px] md:mb-20 mb-16 flex md:flex-row flex-col justify-between items-center lg:items-stretch lg:gap-10 gap-4">
        <div className="xl:max-w-[648px] lg:max-w-[600px] w-full h-auto gap-6 flex flex-col justify-between md:text-start text-center">
          <div>
            <h1 className="2xl:text-[72px] xl:text-6xl lg:text-5xl text-4xl font-semibold leading-[116.667%] text-fog">
              Hello, I’m Brooklyn Gilbert
            </h1>
            <p className="text-intermediate 2xl:text-lg xl:text-base text-sm leading-[133%] xl:my-6 my-4">
              I'm a Freelance <span className="text-fog">UI/UX Designer</span>
              and
              <span className="text-fog ml-1">Developer</span> based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <PrimaryButton className={"md:flex hidden"}>
              Say Hello!
            </PrimaryButton>
          </div>
          <div className="md:grid hidden grid-cols-3 lg:gap-4 gap-2">
            {statsData.map((items, index) => (
              <SuccessNumbers items={items} key={index} />
            ))}
          </div>
        </div>
        <div className="xl:max-w-[536px] lg:max-w-[460px] max-w-[400px] w-full bg-white pt-6 px-6 shadow-c1 rounded-3xl">
          <Image
            className="object-cover"
            src={"/images/webp/hero-user.webp"}
            alt="hero-user"
            width={536}
            height={636}
            unoptimized
          />
        </div>
        <div className="md:hidden flex items-center flex-col gap-6">
          <div className="grid xs:grid-cols-3 grid-cols-2 place-content-center md:gap-4 gap-2 w-full">
            {statsData.map((items, index) => (
              <SuccessNumbers items={items} key={index} />
            ))}
          </div>
          <PrimaryButton>Say Hello!</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
