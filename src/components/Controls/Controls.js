import React from "react";
import styles from "../Controls/Controls.module.css";

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

export default Controls;
