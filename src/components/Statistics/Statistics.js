import React from "react";
import styles from "../Statistics/Statistics.module.css";

import PropTypes from "prop-types";

const Statistics = ({
  feedback,
  feedbackOptions,
  total,
  positivePercentage,
}) => {
  if (total === 0)
    return (
      <div className={styles.Statistics}>
        <p>Not feedback given</p>
      </div>
    );

  let color = "teal";

  return (
    <div className={styles.Statistics}>
      {feedback.map((item) => {
        color = feedbackOptions.reduce((acc, option) => {
          if (option["feedbackType"] === item[0]) return acc + option["color"];
          return acc;
        }, "");

        return (
          <p key={item[0]} style={{ color: color }}>
            {item[0]} : {item[1]}
          </p>
        );
      })}

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  feedback: PropTypes.arrayOf(PropTypes.array).isRequired,
  feedbackOptions: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      feedbackType: PropTypes.string.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;