import React from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import useStyles from "../utils/styles";
import { createTheme } from "@mui/material/styles";
import PrimarySearchAppBar from "./AppBar";

export default function Layout({ children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 600,
        margin: "0.5rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "0.5rem 0",
      },
      h3: {
        fontSize: "0.8rem",
        fontWeight: 400,
        margin: "0.0rem 0",
      },
      h5: {
        fontSize: "1rem",
        fontWeight: 600,
        margin: "0.1rem 0",
      },
      h6: {
        fontSize: "0.5rem",
        fontWeight: 400,
        margin: "0.1rem 0",
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Book Table</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar />
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Book Table.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
