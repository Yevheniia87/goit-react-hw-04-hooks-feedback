import React from "react";
import PropTypes from "prop-types";
import styles from "../Statistics/statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles.statistics}>
      <li className={styles.statisticsItems}> Good: {good}</li>
      <li className={styles.statisticsItems}> Neutral: {neutral}</li>
      <li className={styles.statisticsItems}>Bad: {bad}</li>
      <li className={styles.statisticsItems}>Total: {total}</li>
      <li className={styles.statisticsItems}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
export default Statistics;
