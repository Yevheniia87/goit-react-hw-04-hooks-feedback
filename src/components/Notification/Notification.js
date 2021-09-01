import React from "react";
import styles from "../Notification/notification.module.css";
import PropTypes from "prop-types";
function Notification({ message }) {
  return (
    <>
      <p className={styles.notification}>{message}</p>
    </>
  );
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
