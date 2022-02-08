import React from "react";
import Title from "../../../core/Title/Title";
import styles from "./Recipe.module.css";
import likeButton from "../../../assets/images/like.svg";
import timer from "../../../assets/images/timer.svg";

const Recipe = ({ item }) => {
  return (
    <div key={item.id} className={styles.recipeContainer}>
      <img className={styles.recipe} src={item.imgSrc} alt={item.recipeName} />
      <div className={styles.recipeInfo}>
        <span>
          <img className={styles.timer} src={timer} alt='timer' />
          {item.timeTaken} minutes
        </span>
        <span>
          <img
            className={styles.likeButton}
            src={likeButton}
            alt='likeButton'
          />
          super easy
        </span>
      </div>
      <Title userClasses={styles.reipeLabel}>{item.label}</Title>
    </div>
  );
};

export default Recipe;
