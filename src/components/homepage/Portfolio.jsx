import React from "react";
import PortfolioCards from "./PortfolioCards";
import { portfolioItems } from "../common/Helper";
import PrimaryButton from "../common/PrimaryButton";

const Portfolio = () => {
  return (
    <section className="container-modified mb-[100px]">
      <div className="max-w-[580px] w-full mx-auto text-center">
        <h3 className="heading">Portfolio</h3>
        <p className="sub-heading mt-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="mt-[70px] grid grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <PortfolioCards item={item} key={index} />
        ))}
      </div>
      <PrimaryButton className={"mx-auto mt-[50px]"}>
        More Project
      </PrimaryButton>
    </section>
  );
};

export default Portfolio;
