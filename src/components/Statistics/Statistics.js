import React from "react";
import styles from "../Statistics/Statistics.module.css";

import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0)
    return (
      <div className={styles.Statistics}>
        <p>Not feedback given</p>
      </div>
    );

  return (
    <div className={styles.Statistics}>
      <p className={styles.Good}>Good: {good}</p>
      <p className={styles.Neutral}>Neutral: {neutral}</p>
      <p className={styles.Bad}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
