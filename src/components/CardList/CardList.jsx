import React from 'react';
import styles from'./CardList.module.scss'
import BeerCard from '../BeerCard';


const CardList = (props) => {

  

  return (
    <div className={styles.cardList}>
      {props.beers.map((beer) => {
        return <BeerCard beer={beer}/>
      })}
      
    </div>
  )
}

export default CardList
