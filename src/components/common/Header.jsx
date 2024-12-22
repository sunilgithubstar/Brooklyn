"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerIcon, LogoIcon } from "./Icons";
import LiItems from "./LiItems";
import { ulList } from "./Helper";
import PrimaryButton from "./PrimaryButton";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isShow, setIsSidebarShow] = useState("");
  return (
    <header className="container-modified flex justify-between items-center py-5 gap-7">
      <Link className="lg:max-w-[208px] max-w-[180px] w-full" href={"/"}>
        <LogoIcon />
      </Link>
      <ul className="md:flex hidden items-center lg:gap-8 gap-6 ">
        {ulList.map((items, index) => (
          <LiItems items={items} key={index} />
        ))}
      </ul>
      <div className="flex justify-between items-center gap-2">
        <PrimaryButton>Contact</PrimaryButton>
        <button
          onClick={() => setIsSidebarShow(true)}
          className="sm:w-10 w-8 sm:h-10 h-8 md:hidden flex items-center justify-center"
        >
          <HamburgerIcon />
        </button>
      </div>
      <Sidebar isShow={isShow} setIsSidebarShow={setIsSidebarShow} />
    </header>
  );
};

export default Header;
