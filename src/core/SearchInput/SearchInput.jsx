import React from "react";
import { useState } from "react/cjs/react.development";
import serachIcon from "../../assets/images/searchIcon.svg";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  const [query, setQuery] = useState("");

  const onSearchHandler = (e) => {
    setQuery(e.target.value);
  };

  const clickHandler = () => {
    console.log("entered keyword - ", query);
  };
  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder={props.placeholder}
        className={`${styles.inputclass}`}
        onChange={onSearchHandler}
      />
      <span
        className={styles.imageContainer}
        style={{
          backgroundColor:
            props.bgColorForSearchIcon && props.bgColorForSearchIcon,
        }}
      >
        <img
          src={serachIcon}
          alt='Search'
          className={styles.serachIcon}
          onClick={clickHandler}
        />
      </span>
    </div>
  );
};

export default SearchInput;
