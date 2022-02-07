import React from "react";
import Title from "../../../core/Title/Title";
import styles from "./Recipe.module.css";
const Recipe = ({ item }) => {
  return (
    <div key={item.id} className={styles.recipeContainer}>
      <img src={item.imgSrc} alt={item.recipeName} />
      {/* <Title>{item.label}</Title> */}
    </div>
  );
};

export default Recipe;
