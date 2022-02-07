import React from "react";
import styles from "./Header.module.css";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import pinterest from "../../assets/images/pinterest.svg";
import wifi from "../../assets/images/wifi.svg";
import youtube from "../../assets/images/youtube.svg";
import Logo from "../../core/Logo/Logo";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.navList}>
        <ul>
          <li className={styles.navListItem}>
            <a href='#'>Home</a>
          </li>
          <li className={styles.navListItem}>
            <a href='#'>Categories</a>
          </li>
          <li className={styles.navListItem}>
            <a href='#'>Recipe</a>
          </li>
          <li className={styles.navListItem}>
            <a href='#'>Contact</a>
          </li>
          <li className={styles.navListItem}>
            <a href='#'>About</a>
          </li>
        </ul>
        <div className={styles.icons}>
          <span className={styles.icon}>
            <img src={instagram} alt='instagram' />
          </span>
          <span className={styles.icon}>
            <img src={twitter} alt='twitter' />
          </span>
          <span className={styles.icon}>
            <img src={facebook} alt='facebook' />
          </span>
          <span className={styles.icon}>
            <img src={pinterest} alt='pinterest' />
          </span>
          <span className={`${styles.icon} ${styles.wifi}`}>
            <img src={wifi} alt='wifi' />
          </span>
          <span className={styles.icon}>
            <img src={youtube} alt='youtube' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
