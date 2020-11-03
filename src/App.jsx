import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import CardList from '../src/components/CardList/CardList';
import SideBar from '../src/components/SideBar/SideBar';
import TopBar from '../src/components/TopBar/TopBar';
import library from './data/fa-library';

const App = () => {

  const [beers, setBeers] = useState([]);

  const [ searchedBeers, setSearchedBeers ] = useState(beers);

  const getBeers = async () => {
    return await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      });
  };
  


  // const grabBeers = (searchTerm) => {
  //   fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
  //     .then((res) => res.json())
  //     .then((res) => {
        
  //       // how do i map over a data set with no name???
  //       console.log(res)
  //       const beerData = res.map(getBeers);
  //       setBeers(beerData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    getBeers();
  }, [])

  return (
    
    <div className={styles.app} >
      
        <TopBar 
          className={styles.topBar}
            // updateSearchText={grabBeers}
        />

        <SideBar className={styles.sideBar}/>

        <CardList beers={beers} className={styles.cardList} />

    </div>

  );
}

export default App;
