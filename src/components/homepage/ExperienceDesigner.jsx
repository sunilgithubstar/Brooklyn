import Image from "next/image";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import Link from "next/link";
import {
  DownloadIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../common/Icons";

const ExperienceDesigner = () => {
  return (
    <section className="container-modified relative z-10">
      <div className="flex md:flex-row flex-col items-center justify-between 2xl:p-[112px] xl:p-20 lg:p-14 md:p-10 sm:p-8 p-6 bg-white rounded-2xl shadow-c2 xl:gap-10 gap-6">
        <div className="md:max-w-[424px] max-w-[536px] w-full bg-lavendar rounded-[10px] relative md:mb-0 mb-10">
          <Image
            className="object-cover w-full"
            src={"/images/webp/hero-user.webp"}
            alt="hero-user"
            width={536}
            height={468}
            unoptimized
          />
          <div className="bg-white 2xl:p-3 p-2 rounded shadow-c3 grid grid-cols-4 gap-2 w-fit relative translate-y-1/2 mx-auto">
            <Link
              className="2xl:p-2.5 p-1.5 rounded-lg group hover:bg-secondary duration-300 transition-all ease-in-out w-fit"
              href={""}
            >
              <FacebookIcon />
            </Link>
            <Link
              className="2xl:p-2.5 p-1.5 rounded-lg group hover:bg-secondary duration-300 transition-all ease-in-out w-fit"
              href={""}
            >
              <InstagramIcon />
            </Link>
            <Link
              className="2xl:p-2.5 p-1.5 rounded-lg group hover:bg-secondary duration-300 transition-all ease-in-out w-fit"
              href={""}
            >
              <WhatsappIcon />
            </Link>
            <Link
              className="2xl:p-2.5 p-1.5 rounded-lg group hover:bg-secondary duration-300 transition-all ease-in-out w-fit"
              href={""}
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
        <div className="max-w-[536px] w-full md:text-start text-center">
          <h2 className="2xl:text-[38px] xl:text-3xl text-2xl font-semibold leading-[131.579%] text-fog">
            I am Professional User Experience Designer
          </h2>
          <div className="sub-heading space-y-4 xl:my-8 my-6">
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-center lg:gap-6 gap-4">
            <PrimaryButton className={"w-full lg:w-fit"}>
              My Project
            </PrimaryButton>
            <Link
              target="_blank"
              className="secondary-button group w-full lg:w-fit"
              download={"/pdf/my-resume.pdf"}
              href={"/images/pdf/my-resume.pdf"}
            >
              <DownloadIcon />
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDesigner;
