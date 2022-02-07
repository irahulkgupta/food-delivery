import React from "react";
import styles from "./Checkbox.module.css";

const Checklist = (props) => {
  return (
    <div className={styles.checkboxContainer}>
      <input type='checkbox' className={styles.checkbox} id={props.name} />
      <label className={styles.checkboxLabel} htmlFor={props.name}>
        {props.name} ({props.count})
      </label>
    </div>
  );
};

export default Checklist;
