import React from "react";
import classes from "./Header.module.css";

const OurCustomHeader = () => {
  return (
    <>
      <h1>ZDFRONpol18 Clicker</h1>
      <h2>Pierwsza aplikacja React'owa</h2>
      <span className={classes.welcome}>To jest header</span>
    </>
  );
};
// <> === React.Fragment
export default OurCustomHeader;
