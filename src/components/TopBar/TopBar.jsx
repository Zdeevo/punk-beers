import React from "react";
import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <a
        href="https://www.brewdog.com/uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://presshub.brewdog.com/images/cms/original/1440777209BREWDOGLOGO.jpg"
          alt="BrewDog logo"
          className={styles.brewdogLogo}
        />
      </a>
      <div className={styles.title}>
        <h1>Steve's Big Shiny BrewDog Beers List</h1>
        <h3>A totally pointless beer list cos, y'know... BEER!!</h3>
      </div>
      <a
        href="https://punkapi.com/documentation/v2"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.punkApi}
      >
        Punk API
      </a>
    </div>
  );
};

export default TopBar;
