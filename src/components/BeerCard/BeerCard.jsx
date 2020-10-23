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
    
      <h1 className={styles.header}>
        {name}
      </h1>
      <h2 className={styles.tagline}>
        {tagline}
      </h2>
      <p>
        {shortenDescription(description)}
      </p>
    </div>
  )
}

export default BeerCard
