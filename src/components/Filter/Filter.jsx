import React from "react";
import Checklist from "../../core/Checkbox/Checkbox";
import Title from "../../core/Title/Title";
import styles from "./Filter.module.css";
import SearchInput from "../../core/SearchInput/SearchInput";
import {
  byDietaryPreference,
  byMeal,
  bySeason,
  sweetThings,
} from "./FilterSchema";

const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <Title>Filter Recipe:</Title>
      <p className={styles.text}>
        check multiple boxes below to narrow racipe search results:
      </p>
      <Title userClasses={styles.filterText}>By Season:</Title>
      {bySeason.map((item) => (
        <Checklist key={item.id} name={item.name} count={item.count} />
      ))}
      <Title userClasses={styles.filterText}>By Dietary Preference:</Title>
      {byDietaryPreference.map((item) => (
        <Checklist key={item.id} name={item.name} count={item.count} />
      ))}
      <Title userClasses={styles.filterText}>By Meal:</Title>
      {byMeal.map((item) => (
        <Checklist key={item.id} name={item.name} count={item.count} />
      ))}
      <Title userClasses={styles.filterText}>Sweet Things:</Title>
      {sweetThings.map((item) => (
        <Checklist key={item.id} name={item.name} count={item.count} />
      ))}
      <SearchInput
        placeholder='Enter Keyword...'
        border={true}
        bgColorForSearchIcon='black'
      />
    </div>
  );
};

export default Filter;
