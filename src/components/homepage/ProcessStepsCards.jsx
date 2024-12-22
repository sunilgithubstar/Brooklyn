import React from "react";

const ProcessStepsCards = ({ step }) => {
  return (
    <div
      className={`${step.marginTop} bg-white rounded-xl 2xl:p-8 xl:p-6 p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer`}
    >
      <div className="xl:w-[72px] md:w-14 w-10 xl:h-[72px] md:h-14 h-10 bg-pale group-hover:bg-secondary rounded-lg flex items-center justify-center duration-300 ease-in-out transition-all ">
        {step.icon}
      </div>
      <h3 className="xl:text-xl text-lg font-semibold leading-[120%] text-fog mb-3 xl:mt-8 mt-5">
        {step.id}. {step.title}
      </h3>
      <p className="text-intermediate xl:text-base lg:text-sm text-xs leading-[150%]">
        {step.description}
      </p>
    </div>
  );
};

export default ProcessStepsCards;
