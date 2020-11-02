import React from 'react';
import styles from './TopBar.module.scss';
import SearchBox from '../SearchBox/SearchBox'

const TopBar = (props) => {

  const { updateSearchText } = props;

  return (
    
    
    <div className={styles.topBar}>
      <div className={styles.title}>
        <h1>
          Steve's Big Fat Punk Beers List
        </h1>
        <h3>
          A totally pointless beer list cos, y'know... Beer!!
        </h3>
      </div>
      <div className={styles.searchBox}>
      <SearchBox
          placeholder="Search for recipes..."
          updateSearchText={updateSearchText}
        />
      </div>
      
    </div>
  )
}

export default TopBar
