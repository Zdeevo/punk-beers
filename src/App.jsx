import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import CardList from '../src/components/CardList/CardList';
import SideBar from '../src/components/SideBar/SideBar';
import TopBar from '../src/components/TopBar/TopBar';

const App = () => {

  const [beers, setBeers] = useState([]);

  const getBeers = async () => {

     return await fetch('https://api.punkapi.com/v2/beers')
    .then((res) => res.json())
    .then((res) => {
      setBeers(res);
      console.log(beers);
    });
  };

  useEffect(() => {
    getBeers();
    console.log('useEffect was called');
  }, [])

  return (
    
    <div className={styles.app} >
      
        <TopBar className={styles.topBar}/>

        <SideBar className={styles.sideBar}/>

        <CardList beers={beers} className={styles.cardList} />

    </div>

  );
}

export default App;
