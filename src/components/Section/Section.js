import React from "react";
import styles from "../Section/Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h3 className={styles.Section}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
