import React, { useState } from 'react';
import styles from './App.module.scss'
import CardList from '../src/components/CardList'

function App() {

  const [beers, setBeers] = useState([]);

  fetch('https://api.punkapi.com/v2/beers/10')
    .then(res => res.json())
    .then((res) => {
      setBeers(res);
    })

  return (
    <div className={styles.app}>
      <CardList beers={beers}/>
    </div>
  );
}

export default App;
