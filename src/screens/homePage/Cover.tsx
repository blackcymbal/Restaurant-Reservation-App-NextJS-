import React from "react";
import CoverImage from "../../assets/images/cover.webp";

import HeroSection from "./HeroSection";

function Cover() {
  const heroSectionData = {
    title: "Book Table",
    description: "Reservations with discounts",
    img: CoverImage.src,
  };

  return (
    <>
      <HeroSection data={heroSectionData} />
    </>
  );
}

export default Cover;
