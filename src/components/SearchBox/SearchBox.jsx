import React, { useState } from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { placeholder, setSearchTerm } = props;

  const searchInput = isOpen ? (
    <input
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      onInput={(e) => setSearchTerm(e.target.value)}
    />
  ) : null;

  const reset = () => {
    setSearchTerm("");
  };

  return (
    <div className={styles.search}>
      <span className={styles.fa} onClick={() => reset()}>
        <FontAwesomeIcon icon="search" onClick={() => setIsOpen(!isOpen)} />
      </span>

      {searchInput}
    </div>
  );
};

export default SearchBox;
