import React from "react";
import CommonCountUp from "./CommonCountUp";

const SuccessNumbers = ({ items }) => {
  return (
    <article className="bg-pale border border-white rounded-md text-center xl:py-5 py-4 px-3">
      <div className="flex items-center justify-center gap-1 text-breakaway xl:text-[32px] lg:text-2xl text-xl font-semibold leading-[125%]">
        <CommonCountUp start={0} end={items.value} /> {items.icons}
      </div>
      <p className="text-flintstone xl:text-base lg:text-sm text-xs leading-[150%]">
        {items.description}
      </p>
    </article>
  );
};

export default SuccessNumbers;
