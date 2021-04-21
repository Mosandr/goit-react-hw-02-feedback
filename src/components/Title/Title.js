import React from "react";
import styles from "../Title/Title.module.css";

const Title = ({ titleText }) => {
  return <h3 className={styles.Title}>{titleText}</h3>;
};

export default Title;
