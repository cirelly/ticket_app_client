import React from "react";
import { makeStyles } from "@material-ui/core";
import FormBackground from "../../../assets/ticketappBackground.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "sticky",
    height: "100vh",
    backgroundImage: `url(${FormBackground})`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PaperFormContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default PaperFormContainer;