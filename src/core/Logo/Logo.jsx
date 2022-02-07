import React from "react";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.recipes}>Recipes</span>
      <span className={styles.easyMeals}>Easymeals</span>
    </div>
  );
};

export default Logo;
