import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import CardList from '../src/components/CardList/CardList';
import SideBar from '../src/components/SideBar/SideBar';
import TopBar from '../src/components/TopBar/TopBar';

const App = () => {

  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    return await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
        // console.log(beers);
      });
  };

  const grabBeers = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        const beers = res.map(getBeers);
        setBeers(beers);
      })
      // .catch((err) => {
      //   console.log(err);
      // });
  };

  useEffect(() => {
    getBeers();
    // console.log('useEffect was called');
  }, [])

  return (
    
    <div className={styles.app} >
      
        <TopBar 
          beers={beers} 
          className={styles.topBar}
          updateSearchText={grabBeers}
        />

        <SideBar className={styles.sideBar}/>

        <CardList beers={beers} className={styles.cardList} />

    </div>

  );
}

export default App;
