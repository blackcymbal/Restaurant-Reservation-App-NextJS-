import React from "react";
import { Typography } from "@mui/material";
import Cover from "./Cover";
import Image_Slider from "../../components/ImageSlider";
import Brands from "./Brands";
import Locations from "./Locations";
import Themes from "./Themes";
import Cuisines from "./Cuisines";
import Trending from "./Trending";
import Discounts from "../../components/Discounts";

const HomePage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Cover />
      <section style={{ height: 55 }} />
      <Image_Slider />
      <Brands />
      <Locations />
      <Themes />
      <Cuisines />
      <Trending />
      <Discounts />
    </div>
  );
};

export default HomePage;
