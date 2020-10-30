import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import CardList from '../src/components/CardList'

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
    <div className={styles.app}>
      <CardList beers={beers}/>
    </div>
  );
}

export default App;
