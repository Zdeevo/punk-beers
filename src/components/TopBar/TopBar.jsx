import React from 'react';
import styles from './TopBar.module.scss';

const TopBar = () => {

  return (
    
    
    <div className={styles.topBar}>
      <div className={styles.title}>
        <h1>
          Steve's Big Fat Punk Beers List
        </h1>
        <h2>
          A Beer List For Funsies!!  
        </h2>
      </div>
      <div >
       <a href="" className={styles.googleIcon}>Google</a>
      </div>
      
    </div>
  )
}

export default TopBar
