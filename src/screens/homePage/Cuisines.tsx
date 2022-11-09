import Image from "next/image";
import { Typography, Container } from "@mui/material";

import cuisine1 from "../../assets/images/cuisines/cuisine1.webp";
import cuisine2 from "../../assets/images/cuisines/cuisine2.webp";
import cuisine3 from "../../assets/images/cuisines/cuisine3.webp";
import cuisine4 from "../../assets/images/cuisines/cuisine4.webp";
import cuisine5 from "../../assets/images/cuisines/cuisine5.webp";
import cuisine6 from "../../assets/images/cuisines/cuisine6.webp";
import cuisine7 from "../../assets/images/cuisines/cuisine7.webp";
import cuisine8 from "../../assets/images/cuisines/cuisine8.webp";
import cuisine9 from "../../assets/images/locations/location9.webp";

function Cuisines() {
  let data = [
    { src: cuisine1, title: "Buffet", totalRestaurants: 26 },
    { src: cuisine2, title: "Hotpot", totalRestaurants: 22 },
    { src: cuisine3, title: "Bakery/Cafe", totalRestaurants: 30 },
    { src: cuisine4, title: "Asian Fusion", totalRestaurants: 18 },
    { src: cuisine5, title: "International", totalRestaurants: 9 },
    { src: cuisine6, title: "Western Fusion", totalRestaurants: 6 },
    { src: cuisine7, title: "Grill/BBQ", totalRestaurants: 24 },
    { src: cuisine8, title: "Chinese", totalRestaurants: 19 },
    { src: cuisine9, title: "Japanese", totalRestaurants: 7 },
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
          Cuisines
        </Typography>
        <Typography component="h3" variant="h3">
          View All 9 Cuisines
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
        {data.map((location, idx) => (
          <Container
            key={idx}
            style={{
              width: 224,
              height: 191,
              borderRadius: 4,
              backgroundColor: "#FFFFFF",
              marginRight: 10,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 1,
              marginBottom: 2,
            }}
          >
            <Image
              key={idx}
              src={location.src}
              alt="brand1"
              width={224}
              height={120}
              style={{
                marginLeft: -24,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
            />
            <Container
              style={{ padding: 0 }}
              sx={{
                height: 71,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography color="#000" component="h5" variant="h5">
                {location.title}
              </Typography>
              <Typography color="#000" component="h3" variant="h3">
                {`${location.totalRestaurants} restaurants`}
              </Typography>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default Cuisines;
