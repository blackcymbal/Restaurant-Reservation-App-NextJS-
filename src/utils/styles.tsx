import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#59B2B0",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flex: 1,
  },
  main: {
    minHeight: "80vh",
    backgroundColor: "#FAFAFA",
  },
  footer: {
    textAlign: "center",
  },

  title: {
    "@media(max-width:450px)": {
      fontSize: "30px !important",
    },
  },
  subTitle: {
    color: "#D8D8D8 !important",
    fontWeight: "bold",

    padding: "0px 50px !important",
    "@media(max-width:768px)": {
      padding: "0px 30px !important",
    },
    "@media(max-width:450px)": {
      padding: "0px 15px !important",
      fontSize: "12px !important",
    },
  },
});

export default useStyles;
