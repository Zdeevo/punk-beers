import React, { useState } from 'react';
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const { placeholder, updateSearchText } = props;

  const searchInput = isOpen ? <input type="text" placeholder={placeholder} autoFocus={true} onInput={e => updateSearchText(e.target.value)} /> : null;

  return (
    <div className={styles.search}>
      {searchInput}
      <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon="search" />
      </span>
    </div>
  )
}

export default SearchBox
