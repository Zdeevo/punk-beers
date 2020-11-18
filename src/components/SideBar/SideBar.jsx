import React from "react";
import styles from "./SideBar.module.scss";
import SearchBox from "../SearchBox/SearchBox";

const SideBar = (props) => {
  const {
    filterWeak,
    setFilterWeak,
    filterMedium,
    setFilterMedium,
    filterStrong,
    setFilterStrong,
    weakBeers,
    mediumBeers,
    strongBeers,
    updateSearchText,
    searchTerm,
    setSearchTerm,
  } = props;

  const weakTicked = () => {
    setFilterWeak(!filterWeak);
    weakBeers();
  };

  const mediumTicked = () => {
    setFilterMedium(!filterMedium);
    mediumBeers();
  };

  const strongTicked = () => {
    setFilterStrong(!filterStrong);
    strongBeers();
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarTitle}>
        <h2>Need help finding something? </h2>
        <h3>Try the beer filter below.</h3>
      </div>

      <div className={styles.checkList}>
        <label htmlFor="weak">
          <input
            type="checkbox"
            value="weak"
            name="strength"
            className="checkbox"
            onChange={() => {
              weakTicked();
            }}
          />
          <span>I like 0 - 5% ABV</span>
        </label>

        <label htmlFor="medium">
          <input
            type="checkbox"
            value="medium"
            name="strength"
            className="checkbox"
            onChange={() => {
              mediumTicked();
            }}
          />
          <span>I like 5 - 10% ABV</span>
        </label>

        <label htmlFor="strong">
          <input
            type="checkbox"
            value="strong"
            name="strength"
            className="checkbox"
            onChange={() => {
              strongTicked();
            }}
          />
          <span>I like over 10% ABV</span>
        </label>
      </div>

      <div className={styles.searchTitle}>
        <h3>Or filter beers by keyword.</h3>
        <h3>Just click the icon and start typing!</h3>
      </div>

      <div className={styles.searchBox}>
        <SearchBox
          placeholder="Search for beers..."
          updateSearchText={updateSearchText}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default SideBar;
