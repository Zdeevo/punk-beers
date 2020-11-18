import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import CardList from "../src/components/CardList/CardList";
import SideBar from "../src/components/SideBar/SideBar";
import TopBar from "../src/components/TopBar/TopBar";
import library from './data/fa-library';

const App = () => {
  

  const [beers, setBeers] = useState([]);

  const [ searchTerm, setSearchTerm ] = useState("");

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
      const myMediumBeers = beers.filter((beer) => (beer.abv > 5) && (beer.abv <= 10));
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

    const searchBeersByName = searchTerm ? `&beer_name=${searchTerm}` : "";

    const url = `https://api.punkapi.com/v2/beers?per_page=80${searchBeersByName}`;

    return await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      });
  };

  //-----------------------------------------------------------

  // search for beers using API 'beer_name' search parameter
//  const grabBeers = async () => {
//     return await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setBeers(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


  //----------------------------------------------------------------

  useEffect(() => {
    getBeers();
  }, [filterWeak, filterMedium, filterStrong, searchTerm]);

  // useEffect(() => {
  //   grabBeers();
  // }, [searchTerm]);

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

      <CardList
        beers={beers}
        className={styles.cardList}
        
      />
    </div>
  );
};

export default App;
