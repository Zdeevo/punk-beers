import React from "react";
import styles from "./SideBar.module.scss";
import SearchBox from "../SearchBox/SearchBox";

const SideBar = (props) => {
  const {filterWeak, setFilterWeak, filterMedium, setFilterMedium, filterStrong, setFilterStrong, weakBeers, mediumBeers, strongBeers, updateSearchText, searchTerm, setSearchTerm } = props;

  // const resetFilters = () => {
  //   document.getElementsByClassName("radio").checked = false;
  //   console.log("The button was pushed!!");
  // };


  const weakTicked = () => {
    setFilterWeak(!filterWeak);
    weakBeers();
  }

  const mediumTicked = () => {
    setFilterMedium(!filterMedium);
    mediumBeers();
  }

  const strongTicked = () => {
    setFilterStrong(!filterStrong);
    strongBeers();
  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarTitle}>
        <h2>Need help finding something? </h2>
        <h2>Try the beer filter below.</h2>
      </div>

      <div className={styles.checkList}>
        <label htmlFor="weak">
          <input
            type="checkbox"
            value="weak"
            name="strength"
            className="checkbox"            
            onChange={() => {weakTicked()}}
          />
          I like 0 - 5% ABV
        </label>

        <label htmlFor="medium">
          <input
            type="checkbox"
            value="medium"
            name="strength"
            className="checkbox"  
            onChange={() => {mediumTicked()}}          
          />
          I like 5 - 10% ABV
        </label>

        <label htmlFor="strong">
          <input
            type="checkbox"
            value="strong"
            name="strength"
            className="checkbox"
            onChange={() => {strongTicked()}}
          />
          I like over 10% ABV
        </label>
      </div>

      
    <div className={styles.searchTitle}>
        <h2>
          Or the handy search box.
        </h2>
        <h2>
           Just click to begin searching!
        </h2>
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
