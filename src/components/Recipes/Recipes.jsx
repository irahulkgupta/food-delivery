import React from "react";
import Recipe from "./Recipe/Recipe";
import styles from "./Recipes.module.css";
import { recipes } from "./recipesSchema";
const Recipes = () => {
  return (
    <div className={styles.recipesContainer}>
      {recipes.map((item) => (
        <Recipe key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Recipes;
