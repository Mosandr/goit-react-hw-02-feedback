import React from "react";
import styles from "../FeedbackOptions/FeedbackOptions.module.scss";

import PropTypes from "prop-types";
import classNames from "classnames";

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.FeedbackOptions}>
      {options.map((option) => {
        return (
          <button
            key={option}
            onClick={onLeaveFeedback}
            type="button"
            className={classNames(styles.Button, styles[option])}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Controls;
