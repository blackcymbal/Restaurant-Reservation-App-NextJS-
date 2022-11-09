import * as React from "react";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { IconContext } from "react-icons";
import GiftVoucher from "../../assets/images/icons/gift_voucher.svg";

import trending1 from "../../assets/images/trending/trending1.jpeg";
import trending2 from "../../assets/images/trending/trending2.jpeg";
import trending3 from "../../assets/images/trending/trending3.jpeg";
import trending4 from "../../assets/images/trending/trending4.jpeg";
import trending5 from "../../assets/images/trending/trending5.jpeg";
import trending6 from "../../assets/images/trending/trending6.jpeg";

function Trending() {
  let data = [
    {
      src: trending1,
      title: "Le Mei @ Le Méridien Putrajaya",
      location: "Bukit Bintang",
      cuisine: "Thai",
      totalReservations: 5000,
    },
    {
      src: trending2,
      title: "Steam Era Seafood Steamboat Restaurant 蒸时代 @ Imbi",
      location: "Ampang",
      cuisine: "Buffet",
      totalReservations: 8364,
    },
    {
      src: trending3,
      title: "Lemon Garden @Sentral KL",
      location: "Damansara",
      cuisine: "Korean",
      totalReservations: 3545,
    },
    {
      src: trending4,
      title: "DEEP BLUE @ THE FACE Suites",
      location: "KL Sentral",
      cuisine: "Pub/Bars",
      totalReservations: 5432,
    },
    {
      src: trending5,
      title: "The Mill Cafe @ Grand Millennium",
      location: "Cheras",
      cuisine: "Buffet",
      totalReservations: 4356,
    },
    {
      src: trending6,
      title: "Lai Ching Yuen Restaurant @ Grand Millennium",
      location: "Masjid Jamek",
      totalReservations: 6562,
    },
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
          Trending
        </Typography>
        <Typography component="h3" variant="h3">
          View All 30 Trending Restaurants
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
        {data.map((trending, idx) => (
          <Container
            key={idx}
            sx={{ height: 289, width: 300, boxShadow: 1 }}
            style={{
              padding: 0,
              borderRadius: 4,
              marginRight: 10,
              marginBottom: 5,
            }}
          >
            <Container
              style={{
                background: `url(${trending.src.src}) no-repeat`,
                backgroundSize: "cover",
                height: 169,
                width: 300,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 0,
              }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Container
                sx={{
                  height: 60,
                  width: 50,
                  borderTopRightRadius: 4,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  alignSelf: "end",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                style={{
                  marginLeft: 0,
                  padding: 0,
                }}
              >
                <IconContext.Provider
                  value={{
                    color: "#FFFFFF",
                    size: "35px",
                  }}
                >
                  <div>
                    <FiChevronLeft />
                  </div>
                </IconContext.Provider>
              </Container>
              <Container
                sx={{
                  height: 60,
                  width: 50,
                  borderTopLeftRadius: 4,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  alignSelf: "end",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                style={{
                  marginRight: 0,
                  padding: 0,
                }}
              >
                <IconContext.Provider
                  value={{
                    color: "#FFFFFF",
                    size: "35px",
                  }}
                >
                  <div>
                    <FiChevronRight></FiChevronRight>
                  </div>
                </IconContext.Provider>
              </Container>
            </Container>

            <Container
              style={{
                backgroundColor: "#FFFFFF",
                height: 120,
                width: 300,
                padding: 0,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Container
                style={{
                  backgroundColor: "#FFFFFF",
                  height: 50,
                  width: 300,
                  padding: 0,
                }}
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "16px",
                    marginTop: "16px",
                  }}
                  component="h2"
                  variant="h2"
                >
                  {trending.title}
                </Typography>
                <Container
                  style={{
                    backgroundColor: "#F38330",
                    height: 34,
                    width: 34,
                    marginRight: 0,
                    padding: 0,
                    borderBottomLeftRadius: 4,
                  }}
                >
                  <Image
                    src={GiftVoucher.src}
                    alt="brand1"
                    width={34}
                    height={37}
                  />
                </Container>
              </Container>
              <Container
                style={{
                  backgroundColor: "#FFFFFF",
                  height: 70,
                  width: 300,
                  padding: 0,
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginLeft: "16px",
                  }}
                  component="h3"
                  variant="h3"
                >
                  {`${trending.location} - ${trending.cuisine}`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginLeft: "16px",
                    marginTop: "8px",
                  }}
                  component="h3"
                  variant="h3"
                >
                  {trending.totalReservations} reservations
                </Typography>
              </Container>
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default Trending;
