import React from 'react';
import styles from'./CardList.module.scss'
import BeerCard from '../BeerCard';


const CardList = (props) => {

  const { beers } = props;

  return (

    <div className={styles.cardList} key={beers.image_url}>

      {beers.map((beer) => {
        return <BeerCard beer={beer} />
      })}
      
    </div>
  )
}

export default CardList
