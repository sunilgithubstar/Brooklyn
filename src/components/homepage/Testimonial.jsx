import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  const testimonialItems = [
    {
      id: 1,
      descriptions:
        "“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”",
      personName: "Esther Howard",
      post: "Managing Director, ABC company",
    },
    {
      id: 2,
      descriptions:
        "“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”",
      personName: "Esther Howard",
      post: "Managing Director, ABC company",
    },
    {
      id: 3,
      descriptions:
        "“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”",
      personName: "Esther Howard",
      post: "Managing Director, ABC company",
    },
  ];
  return (
    <section className="container-modified">
      <h2 className="heading text-center">Testimonial</h2>
      <p className="sub-heading mt-6 max-w-[577px] w-full mx-auto text-center">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div className="max-w-[872px] w-full mx-auto mt-[70px]">
        <TestimonialSlider testimonialItems={testimonialItems} />
      </div>
    </section>
  );
};

export default Testimonial;
