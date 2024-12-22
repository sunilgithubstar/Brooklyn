import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { PrimaryIcon } from "../common/Icons";

const DiscussYourProject = () => {
  return (
    <section className="py-[100px] bg-fog">
      <div className="max-w-[660px] w-full px-4 mx-auto text-center space-y-8">
        <h2 className="heading text-white">
          Do you have Project Idia? Let's discuss your project!
        </h2>
        <p className="sub-heading text-chateau ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <PrimaryButton className={"group mx-auto"}>
          Let’s work Together
          <PrimaryIcon
            className={
              "group-hover:fill-secondary fill-white duration-300 ease-in-out transition-all group-hover:translate-x-2"
            }
          />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default DiscussYourProject;
