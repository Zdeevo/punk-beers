import React from 'react'
import styles from './BeerCard.module.scss'

const BeerCard = (props) => {
  const shortenDescription = (description) =>
    description.length < 300
      ? description
      : description.substring(0, 200) + "...";

  const { image_url, name, tagline, description } = props.beer


  return (
    <div className={styles.beerCard}>
      
      <img src={image_url} alt="https://via.placeholder.com/200" className={styles.image}/>
    
      <p className={styles.name}>
        {name}
      </p>
   
      <p className={styles.tagline}>
        {tagline}
      </p>
  
      <p className={styles.description}>
        {shortenDescription(description)}
      </p>
    </div>
  )
}

export default BeerCard
