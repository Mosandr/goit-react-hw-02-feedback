import React from "react";
import styles from "../Statistics/Statistics.module.css";

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

export default Statistics;
