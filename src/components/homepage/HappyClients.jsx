import Link from "next/link";
import React from "react";
import {
  AmazonIcon,
  DribbleIcon,
  GoogleIcon,
  LinkedinIcon2,
  MediumIcon,
  SpotifyIcon,
} from "../common/Icons";

const HappyClients = () => {
  const clients = [
    {
      id: 1,
      icon: <GoogleIcon />,
    },
    {
      id: 2,
      icon: <DribbleIcon />,
    },
    {
      id: 3,
      icon: <LinkedinIcon2 />,
    },
    {
      id: 4,
      icon: <AmazonIcon />,
    },
    {
      id: 5,
      icon: <MediumIcon />,
    },
    {
      id: 6,
      icon: <SpotifyIcon />,
    },
  ];
  return (
    <section className="container-modified text-center py-[100px]">
      <h2 className="heading">Happy Clients</h2>
      <p className="sub-heading mt-6 max-w-[577px] w-full mx-auto">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div className="flex items-center">
        {clients.map((item, index) => (
          <article key={index}>{item.icon}</article>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
