import Image from "next/image";
import { Typography, Container } from "@mui/material";

import brand1 from "../../assets/images/brands/brand1.webp";
import brand2 from "../../assets/images/brands/brand2.webp";
import brand3 from "../../assets/images/brands/brand3.webp";
import brand4 from "../../assets/images/brands/brand4.webp";
import brand5 from "../../assets/images/brands/brand5.webp";
import brand6 from "../../assets/images/brands/brand6.webp";
import brand7 from "../../assets/images/brands/brand7.webp";
import brand8 from "../../assets/images/brands/brand8.webp";
import brand9 from "../../assets/images/brands/brand9.webp";
import brand10 from "../../assets/images/brands/brand10.webp";

function Brands() {
  let data = [
    { src: brand1 },
    { src: brand2 },
    { src: brand3 },
    { src: brand4 },
    { src: brand5 },
    { src: brand6 },
    { src: brand7 },
    { src: brand8 },
    { src: brand9 },
    { src: brand10 },
  ];

  return (
    <Container
      style={{
        padding: 0,
        marginTop: 40,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        style={{
          marginLeft: 0,
          padding: 0,
        }}
      >
        <Typography component="h1" variant="h1">
          Brands
        </Typography>
        <Typography component="h3" variant="h3">
          View All 10 Brands
        </Typography>
      </Container>
      <Container
        sx={{
          overflow: "auto",
          display: "flex",
          alignItems: "flex-start",
        }}
        style={{
          marginLeft: 0,
          padding: 0,
        }}
      >
        {data.map((image, idx) => (
          <Container
            key={idx}
            sx={{ height: 150, width: 150, boxShadow: 1 }}
            style={{ marginRight: 10, borderRadius: 5, marginBottom: 1 }}
          >
            <Image
              key={idx}
              src={image.src}
              alt="brand1"
              width={150}
              height={150}
              style={{ borderRadius: 5, marginLeft: -24 }}
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default Brands;
