import React from "react";
import { makeStyles } from "@material-ui/core";
// import FormBackground from "../../../assets/26199.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundAttachment: "sticky",
    height: "80vh",
    // backgroundImage: `url(${FormBackground})`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    opacity: 0.6
  },
}));

const PaperFormContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default PaperFormContainer;