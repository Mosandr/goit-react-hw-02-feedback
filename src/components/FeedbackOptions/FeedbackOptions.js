import React from "react";
import styles from "../FeedbackOptions/FeedbackOptions.module.css";

import PropTypes from "prop-types";

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.FeedbackOptions}>
      {options.map((option) => {
        return (
          <button
            key={option.feedbackType}
            onClick={onLeaveFeedback}
            type="button"
            className={styles.Button}
            style={{ backgroundColor: option.color }}
          >
            {option.feedbackType}
          </button>
        );
      })}
    </div>
  );
};

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      feedbackType: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

export default Controls;
