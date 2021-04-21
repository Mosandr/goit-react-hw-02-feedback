import React from "react";
import styles from "../Controls/Controls.module.css";

const Controls = ({ onGoodClick, onBadClick, onNeutralClick }) => {
  return (
    <div className={styles.Controls}>
      <button onClick={onGoodClick} type="button" className={styles.Button}>
        Good
      </button>
      <button
        onClick={onNeutralClick}
        type="button"
        className={styles.ButtonNeutral}
      >
        Neutral
      </button>
      <button onClick={onBadClick} type="button" className={styles.ButtonBad}>
        Bad
      </button>
    </div>
  );
};

export default Controls;
