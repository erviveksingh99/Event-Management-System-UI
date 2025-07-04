import React from "react";
import styles from "./InteractionControls.module.css";

const InteractionControls = ({ toggleDarkMode }) => {
  return (
    <div className={styles.interactions}>
      <i className={`fa-regular fa-envelope ${styles.notified} ${styles.green}`}></i>
      <i className={`fa-regular fa-bell ${styles.notified} ${styles.red}`}></i>
      <div className={styles.toggle} onClick={toggleDarkMode}>
        <div className={styles.modeIcon}>
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
    </div>
  );
};

export default InteractionControls;
