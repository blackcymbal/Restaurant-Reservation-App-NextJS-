import * as React from "react";
import {
  CardActionArea,
  Container,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import theme1 from "../../assets/images/themes/theme1.webp";
import theme2 from "../../assets/images/themes/theme2.webp";
import theme3 from "../../assets/images/themes/theme3.webp";
import theme4 from "../../assets/images/themes/theme4.webp";
import theme5 from "../../assets/images/themes/theme5.webp";
import theme6 from "../../assets/images/themes/theme6.webp";
import theme7 from "../../assets/images/themes/theme7.webp";
import theme8 from "../../assets/images/themes/theme8.webp";

export default function Themes() {
  let data = [
    { src: theme1, title: "New on BookTable!", totalRestaurants: 9 },
    { src: theme2, title: "Weekend Specials", totalRestaurants: 13 },
    { src: theme3, title: "Makan Makan!", totalRestaurants: 5 },
    { src: theme4, title: "Trending", totalRestaurants: 18 },
    { src: theme5, title: "Hotel Dining", totalRestaurants: 4 },
    //{ src: theme6, title: "Bars & Bistros", totalRestaurants: 6 },
    // { src: theme7, title: "Sky Dining", totalRestaurants: 15 },
    // { src: theme8, title: "Cafe & Brunch", totalRestaurants: 19 },
  ];

  return (
    <Container
      //   sx={{
      //     display: "flex",
      //     overflow: "auto",
      //     // alignItems: "flex-start",
      //     //   justifyContent: "space-between",
      //   }}
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
          Themes
        </Typography>
        <Typography component="h3" variant="h3">
          View All 12 Themes
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          overflow: "auto",
        }}
        style={{
          marginLeft: 0,
          padding: 0,
        }}
      >
        {data.map((theme, idx) => (
          <Card
            key={idx}
            sx={{ width: 224, height: 191 }}
            style={{ marginRight: 10, marginBottom: 2 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="120"
                image={theme1.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.primary">
                  5 restaurants
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </Container>
  );
}
