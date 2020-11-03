import React from 'react';
import styles from './SideBar.module.scss';
import SearchBox from '../SearchBox/SearchBox'

const SideBar = (props) => {

  const { updateSearchText } = props;

  return (

  <div className={styles.sideBar}>

    <div className={styles.sideBarTitle} >
      <h2>Need help finding something? </h2> 
      <h2>Try the beer filter below.</h2>
    </div>
    <ul className={styles.checkList}>
      <li>
        <input className={styles.checkBox} type="checkbox" id="weak" name="type2" value="weak"/>
        <label htmlFor="weak"> I like 0 - 5% ABV</label>
      </li>

      <li>
        <input className={styles.checkBox} type="checkbox" id="strong" name="type1" value="strong"/>
        <label htmlFor="strong"> I like 5 - 10% ABV</label>
      </li>

      <li>
        <input className={styles.checkBox} type="checkbox" id="bitter" name="type3" value="bitter"/>
        <label htmlFor="bitter"> I like over 10% ABV</label>
      </li>

      <li>
        <input className={styles.checkBox} type="checkbox" id="dark" name="type3" value="dark"/>
        <label htmlFor="dark"> I like dark beers!</label>
      </li>

      <li>  
        <input className={styles.checkBox} type="checkbox" id="light" name="type3" value="light"/>
        <label htmlFor="light"> I like light beers!</label>
      </li>
    </ul>

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
        />
      </div>

  </div>

  )
}

export default SideBar
