import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={styles.searchAndCheck}>
      <form className={styles.searchBox}>
        <input type="text" placeholder="Search event..." />
        <i className="bx bx-search"></i>
      </form>

      <div className={`${styles.interactions} ${styles.interactionControl}`}>
        <i className="fa-regular fa-envelope notified"></i>
        <i className="fa-regular fa-bell notified"></i>
        <div className={styles.toggle} onClick={toggleDarkMode}>
          <div className={`${styles.modeIcon} ${styles.moon} ${darkMode ? styles.hidden : ""}`}>
            <i className="bx bxs-moon"></i>
          </div>
          <div className={`${styles.modeIcon} ${styles.sun} ${!darkMode ? styles.hidden : ""}`}>
            <i className="bx bxs-sun"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
