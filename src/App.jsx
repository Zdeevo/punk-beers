import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import CardList from "../src/components/CardList/CardList";
import SideBar from "../src/components/SideBar/SideBar";
import TopBar from "../src/components/TopBar/TopBar";
import library from "./data/fa-library";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [filterWeak, setFilterWeak] = useState(false);

  const [filterMedium, setFilterMedium] = useState(false);

  const [filterStrong, setFilterStrong] = useState(false);

  let weakBeers = () => {
    if (filterWeak === true) {
      const myWeakBeers = beers.filter((beer) => beer.abv <= 5);
      setBeers(myWeakBeers);
    } else {
      getBeers();
    }
  };

  let mediumBeers = () => {
    if (filterMedium === true) {
      const myMediumBeers = beers.filter(
        (beer) => beer.abv > 5 && beer.abv <= 10
      );
      setBeers(myMediumBeers);
    } else {
      getBeers();
    }
  };

  let strongBeers = () => {
    if (filterStrong === true) {
      const myStrongBeers = beers.filter((beer) => beer.abv > 10);
      setBeers(myStrongBeers);
    } else {
      getBeers();
    }
  };

  const getBeers = async () => {
    const searchBeersByName = searchTerm ? `&beer_name=${searchTerm}` : "";

    const url = `https://api.punkapi.com/v2/beers?per_page=80${searchBeersByName}`;

    return await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      });
  };

  useEffect(() => {
    getBeers();
  }, [searchTerm]);

  useEffect(() => {
    weakBeers();
  }, [filterWeak]);

  useEffect(() => {
    mediumBeers();
  }, [filterMedium]);

  useEffect(() => {
    strongBeers();
  }, [filterStrong]);



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
        updateSearchText={getBeers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CardList beers={beers} className={styles.cardList} />
    </div>
  );
};

export default App;
