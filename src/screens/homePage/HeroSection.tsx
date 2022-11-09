import { Container, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "../../utils/styles";
import SearchField from "../../components/SearchField";

function HeroSection({ data }) {
  const classes = useStyles();
  const matchesSm = useMediaQuery("(max-width:600px)");
  return (
    <>
      <main
        style={{
          background: `url(${data.img}) no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box height={matchesSm ? 300 : "40vh"}>
          <Container maxWidth="xl">
            <Box
              height={matchesSm ? 300 : "40vh"}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                component="h1"
                variant="h1"
                color="#FFFF"
                className={classes.title}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h2"
                color="#FFFF"
                textAlign="center"
                className={classes.subTitle}
              >
                {data.description}
              </Typography>
              <SearchField />
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default HeroSection;
