import React from "react";
import { Container, Typography } from "@mui/material";
import BadgeRed from "../assets/images/icons/badge_red.png";

function Discounts() {
  const data = [
    { time: "08.00", discount: 15 },
    { time: "10.00", discount: 10 },
    { time: "12.00", discount: 20 },
    { time: "14.00", discount: 5 },
    { time: "16.00", discount: 25 },
    { time: "18.00", discount: 20 },
    { time: "21.00", discount: 10 },
    { time: "22.00", discount: 15 },
    { time: "22.30", discount: 18 },
    { time: "23.00", discount: 15 },
    { time: "12.30", discount: 20 },
    { time: "06.00", discount: 15 },
    { time: "05.00", discount: 25 },
    { time: "04.00", discount: 15 },
    { time: "02.00", discount: 10 },
    { time: "01.00", discount: 15 },
    { time: "23.00", discount: 15 },
    { time: "12.30", discount: 20 },
    { time: "06.00", discount: 15 },
    { time: "05.00", discount: 25 },
    { time: "04.00", discount: 15 },
    { time: "02.00", discount: 10 },
    { time: "01.00", discount: 15 },
  ];

  return (
    <Container
      sx={{
        overflow: "auto",
        display: "flex",
      }}
      style={{
        marginLeft: 0,
        padding: 0,
      }}
    >
      {data.map((item, idx) => (
        <Container
          key={idx}
          style={{
            background: `url(${BadgeRed.src}) no-repeat`,
            backgroundSize: "cover",
            height: 66,
            width: 66,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          >
            {item.time}
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: "#FFFFFF",
              marginTop: 3,
            }}
          >
            -{item.discount}%
          </Typography>
        </Container>
      ))}
    </Container>
  );
}

export default Discounts;
