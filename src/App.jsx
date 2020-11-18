import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import CardList from "../src/components/CardList/CardList";
import SideBar from "../src/components/SideBar/SideBar";
import TopBar from "../src/components/TopBar/TopBar";

const App = () => {
  const [beerSearch, setBeerSearch] = useState([]);

  const [beers, setBeers] = useState([]);

  const [filterWeak, setFilterWeak] = useState(false);

  const [filterMedium, setFilterMedium] = useState(false);

  const [filterStrong, setFilterStrong] = useState(false);

  let weakBeers = () => {
    if (filterWeak === true) {
      const myWeakBeers = beers.filter((beer) => beer.abv <= 5);
      setBeers(myWeakBeers);
    } else {
      return null;
    }
  };

  let mediumBeers = () => {
    if (filterMedium === true) {
      const myMediumBeers = beers.filter((beer) => beer.abv > 5 <= 10);
      setBeers(myMediumBeers);
    } else {
      return null;
    }
  };

  let strongBeers = () => {
    if (filterStrong === true) {
      const myStrongBeers = beers.filter((beer) => beer.abv > 10);
      setBeers(myStrongBeers);
    } else {
      return null;
    }
  };

  const getBeers = async () => {
    return await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      });
  };

  // search for beers using API 'beer_name' search parameter
  const searchBeers = async () => {
    return await fetch("https://api.punkapi.com/v2/beers?beer_name=${search}")
      .then((res) => res.json())
      .then((res) => {
        setBeerSearch(res);
      });
  };

  useEffect(() => {
    getBeers();
    searchBeers();
  }, [filterWeak, filterMedium, filterStrong]);

  return (
    <div className={styles.app}>
      <TopBar className={styles.topBar} />

      <SideBar
        className={styles.sideBar}
        setFilterWeak={setFilterWeak}
        filterWeak={filterWeak}
        setFilterMedium={setFilterMedium}
        filterMedium={filterMedium}
        setFilterStrong={setFilterStrong}
        filterStrong={filterStrong}
        weakBeers={weakBeers}
        mediumBeers={mediumBeers}
        strongBeers={strongBeers}
      />

      <CardList
        beers={beers}
        className={styles.cardList}
        beerSearch={beerSearch}
      />
    </div>
  );
};

export default App;
