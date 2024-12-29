import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const WhatIdo = () => {
  const whatIdoItems = [
    {
      id: 1,
      heading: "User Experience (UX)",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
      id: 1,
      heading: "User Interface (UI)",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
      id: 1,
      heading: "Web Development",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
  ];
  return (
    <section className="bg-lavendar">
      <div className="container-modified flex justify-between items-center py-[150px]">
        <div className="max-w-[529px] w-full">
          <h2 className="heading">What I do?</h2>
          <p className="sub-heading mt-6 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <span className="sub-heading ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </span>
          <PrimaryButton className={"mt-[50px]"}>Say Hello!</PrimaryButton>
        </div>
        <div className="max-w-[648px] w-full space-y-6">
          {whatIdoItems.map((item, index) => (
            <article
              key={index}
              className="p-8 rounded-[6px] bg-white hover:shadow-c4 duration-300 ease-in-out transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="w-1 bg-secondary absolute left-0 top-0 h-full -translate-y-full group-hover:translate-y-0 duration-300 ease-in-out transition-all"></div>
              <h4 className="text-2xl font-semibold leading-[100%] text-fog">
                {item.heading}
              </h4>
              <p className="text-base leading-[150%] text-breakaway mt-4">
                {item.paragraph}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;
