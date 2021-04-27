import React from "react";
import styles from "../Statistics/Statistics.module.scss";

import PropTypes from "prop-types";
const classNames = require("classnames");

const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.Statistics}>
      {feedback.map((item) => {
        return (
          <p key={item[0]} className={classNames(styles[item[0]])}>
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
  total: PropTypes.number.isRequired,
};

export default Statistics;
