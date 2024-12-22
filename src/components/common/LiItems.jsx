import Link from "next/link";
import React from "react";

const LiItems = ({ items }) => {
  return (
    <>
      <li className="list-none">
        <Link className="header-li" href={items.href}>
          {items.name}
        </Link>
      </li>
    </>
  );
};

export default LiItems;
