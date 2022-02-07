import React from "react";
import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <p className={`${styles.title} ${props.userClasses}`}>{props.children}</p>
  );
};

export default Title;
