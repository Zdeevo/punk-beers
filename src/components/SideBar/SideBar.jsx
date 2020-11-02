import React from 'react';
import styles from './SideBar.module.scss';

const SideBar = () => {


  return (


  <div className={styles.sideBar}>

    {/* split out into different h2 tags */}
    <h2 className={styles.sideBarTitle} >Need help finding something? <br/><br/> Try the beer filter below.<br/><br/></h2>

    <ul className={styles.checkList}>
      <li>
        <input className={styles.checkBox} type="checkbox" id="strong" name="type1" value="strong"/>
        <label htmlFor="strong"> I like strong beers!</label>
      </li>
      <br/>
      <li>
        <input className={styles.checkBox} type="checkbox" id="weak" name="type2" value="weak"/>
        <label htmlFor="weak"> I like weak beers!</label>
      </li>
      <br/>
      <li>
        <input className={styles.checkBox} type="checkbox" id="bitter" name="type3" value="bitter"/>
        <label htmlFor="bitter"> I like bitter beers!</label>
      </li>
      <br/>
      <li>
        <input className={styles.checkBox} type="checkbox" id="dark" name="type3" value="dark"/>
        <label htmlFor="dark"> I like dark beers!</label>
      </li>
      <br/>
      <li>  
        <input className={styles.checkBox} type="checkbox" id="light" name="type3" value="light"/>
        <label htmlFor="light"> I like light beers!</label>
      </li>
      <br/><br/>

      {/* <input type="submit" value="GO!" className={styles.goBtn}/> */}
    </ul>
  </div>

  )
}

export default SideBar
