import React from "react";
import styles from "./Header.module.css";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import pinterest from "../../assets/images/pinterest.svg";
import wifi from "../../assets/images/wifi.svg";
import youtube from "../../assets/images/youtube.svg";
import wishlist from "../../assets/images/wishlist.svg";
import cart from "../../assets/images/cart.svg";
import Logo from "../../core/Logo/Logo";
import SearchInput from "../../core/SearchInput/SearchInput";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoArea}>
        <Logo />
        <SearchInput />
        <div className={styles.favorites}>
          <img src={wishlist} alt='wishlist' />
          Favorites
        </div>
        <div className={styles.cart}>
          <img src={cart} alt='cart' />
          Cart (0.00)
        </div>
      </div>
      <div className={styles.navList}>
        <ul>
          <li className={styles.navListItem}>Home</li>
          <li className={styles.navListItem}>Categories</li>
          <li className={styles.navListItem}>Recipe</li>
          <li className={styles.navListItem}>Contact</li>
          <li className={styles.navListItem}>About</li>
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
