import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryIcon } from "../common/Icons";

const PortfolioCards = ({ item }) => {
  return (
    <Link
      href={item.path}
      className="border-dipper border shadow-c3 cursor-pointer group rounded-lg "
    >
      <Image
        className="object-cover rounded-t-lg group-hover:scale-[1.01] duration-300 ease-in-out"
        src={item.imgPath}
        alt={"dsx"}
        width={424}
        height={248}
        unoptimized
      />
      <div className="p-8">
        <h3 className="text-xs font-medium leading-[133.333%] text-applause">
          {item.subHeading}
        </h3>
        <h2 className="text-fog text-lg font-semibold leading-[133.333%] mb-3 mt-1">
          {item.title}
        </h2>
        <p className="text-sm leading-[142.857%] text-intermediate">
          {item.description}
        </p>
        <p
          className="px-6 w-fit mt-5 h-12 rounded border border-secondary text-secondary flex items-center gap-3 text-base font-semibold leading-[150%] group-hover:bg-secondary duration-300 ease-in-out transition-all group-hover:text-white"
          href={"/"}
        >
          Case Study
          <PrimaryIcon
            className={
              "fill-secondary group-hover:fill-white duration-300 ease-in-out transition-all group-hover:translate-x-2"
            }
          />
        </p>
      </div>
    </Link>
  );
};

export default PortfolioCards;
