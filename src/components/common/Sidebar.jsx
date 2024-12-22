import React from "react";
import { ulList } from "./Helper";
import LiItems from "./LiItems";
import Link from "next/link";
import { CrossIcon, LogoIcon } from "./Icons";

const Sidebar = ({ isShow, setIsSidebarShow }) => {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 h-dvh max-w-80 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col p-4 ${
          isShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6 gap-4">
          <Link className="max-w-[160px] w-full" href={"/"}>
            <LogoIcon />
          </Link>
          <button
            className="w-10 h-10 border-[1.5px] black border-black rounded-full p-2 hover:rotate-180 duration-300 ease-in-out transition-all hover:scale-110"
            onClick={() => setIsSidebarShow(false)}
          >
            <CrossIcon />
          </button>
        </div>
        <ul className="space-y-8 grow overflow-auto">
          {ulList.map((items, index) => (
            <LiItems items={items} key={index} />
          ))}
        </ul>
      </aside>
      {isShow && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarShow(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
