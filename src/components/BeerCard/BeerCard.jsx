import React from 'react'
import styles from './BeerCard.module.scss'

const BeerCard = (props) => {
  

  const { 
    image_url, 
    name, 
    tagline, 
    description, 
    abv 
  } = props.beer

  // const randomNum = Math.floor(Math.random() * Math.floor(80))

  return (
    <div className={styles.beerCard}>
      
      <img src={image_url} alt="https://via.placeholder.com/200" className={styles.image}/>
    
      <h1 className={styles.name}>
        {name} 
      </h1>
   
      <h2 className={styles.tagline}>
        '{tagline}'
        <span className={styles.abv}>
            ABV: {abv} %
        </span>
      </h2>
      
  
      <p className={styles.description}>
        <span className={styles.descriptionHeading}>Description: </span>
        <span className={styles.descriptionText}> '{description}'</span>
      
      </p>

      {/* <p className={styles.foodPairs}> 
        <span className={styles.foodPairsHeading}> 
          Pairs well with: 
        </span>
      
        <span className={styles.foodPairsItem}>{food_pairing.map((foodPair) => {
        return <span> '{foodPair}' </span>})}
        </span>
      </p> */}

    </div>
  )
}

export default BeerCard
