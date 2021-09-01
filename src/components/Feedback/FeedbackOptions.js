import React from "react";
import PropTypes from "prop-types";
import styles from "../Feedback/feedback.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.optionsItems}>
      {options.map((option) => (
        <li key={option} className={styles.optionList}>
          <button
            className={styles.optionBtn}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
