import React from "react";
import PropTypes from "prop-types";
import styles from "../Section/section.module.css";

function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
