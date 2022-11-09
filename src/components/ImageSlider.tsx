import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Container } from "@mui/material";

import slider1 from "../assets/images/slider1.webp";
import slider2 from "../assets/images/slider2.webp";
import slider3 from "../assets/images/slider3.webp";
import slider4 from "../assets/images/slider4.webp";

function Image_Slider() {
  return (
    <Container style={{ maxWidth: "65%" }}>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={3000}
        infiniteLoop={true}
      >
        <div>
          <Image
            src={slider1.src}
            alt="slider1"
            width={786}
            height={184}
            style={{ height: "auto" }}
          />
        </div>
        <div>
          <Image
            src={slider2.src}
            alt="slider2"
            width={786}
            height={184}
            style={{ height: "auto" }}
          />
        </div>
        <div>
          <Image
            src={slider3.src}
            alt="slider3"
            width={786}
            height={184}
            style={{ height: "auto" }}
          />
        </div>
        <div>
          <Image
            src={slider4.src}
            alt="slider4"
            width={786}
            height={184}
            style={{ height: "auto" }}
          />
        </div>
      </Carousel>
    </Container>
  );
}

export default Image_Slider;
