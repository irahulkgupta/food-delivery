import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.left}>
        <a href='#' className={styles.navbarItem}>
          Forum
        </a>
        <a href='#' className={styles.navbarItem}>
          Categories
        </a>
        <a href='#' className={styles.navbarItem}>
          Books
        </a>
        <a href='#' className={styles.navbarItem}>
          Recipe Index
        </a>
        <a href='#' className={styles.navbarItem}>
          Popular
        </a>
      </div>
      <div className={styles.right}>
        <span>register</span>
        <span>login</span>
      </div>
    </div>
  );
};

export default NavBar;
