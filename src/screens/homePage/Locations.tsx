import Image from "next/image";
import { Typography, Container } from "@mui/material";

import location1 from "../../assets/images/locations/location1.webp";
import location2 from "../../assets/images/locations/location2.webp";
import location3 from "../../assets/images/locations/location3.webp";
import location4 from "../../assets/images/locations/location4.webp";
import location5 from "../../assets/images/locations/location5.webp";
import location6 from "../../assets/images/locations/location6.webp";
import location7 from "../../assets/images/locations/location7.webp";
import location8 from "../../assets/images/locations/location8.webp";
import location9 from "../../assets/images/locations/location9.webp";
import location10 from "../../assets/images/locations/location10.webp";
import location11 from "../../assets/images/locations/location11.webp";
import location12 from "../../assets/images/locations/location12.webp";

function Locations() {
  let data = [
    { src: location1, title: "Petaling Jaya", totalRestaurants: 9 },
    { src: location2, title: "Heart of KL", totalRestaurants: 13 },
    { src: location3, title: "Bukit Bintang", totalRestaurants: 5 },
    { src: location4, title: "Damansara", totalRestaurants: 18 },
    { src: location5, title: "Cheras", totalRestaurants: 4 },
    { src: location6, title: "Subang Jaya", totalRestaurants: 6 },
    { src: location7, title: "Putrajaya", totalRestaurants: 3 },
    { src: location8, title: "Bangsar", totalRestaurants: 19 },
    { src: location9, title: "Kepong", totalRestaurants: 17 },
    { src: location10, title: "Mont Kiara", totalRestaurants: 8 },
    { src: location11, title: "Puchong", totalRestaurants: 10 },
    { src: location12, title: "Old Klang", totalRestaurants: 6 },
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
          Locations
        </Typography>
        <Typography component="h3" variant="h3">
          View All 16 Locations
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
              backgroundColor: "#FFFF",
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

export default Locations;
