import React from "react";
import styles from "../Controls/Controls.module.css";

import PropTypes from "prop-types";

const Controls = ({ onFeedbackClick, btnList }) => {
  return (
    <div className={styles.Controls}>
      {btnList.map((btn) => {
        return (
          <button
            key={btn.feedbackType}
            onClick={onFeedbackClick}
            type="button"
            className={styles.Button}
            style={{ backgroundColor: btn.color }}
          >
            {btn.feedbackType}
          </button>
        );
      })}
    </div>
  );
};

Controls.propTypes = {
  onFeedbackClick: PropTypes.func.isRequired,
  btnList: PropTypes.arrayOf(
    PropTypes.shape({
      feedbackType: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

export default Controls;
