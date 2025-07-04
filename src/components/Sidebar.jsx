import React from "react";
import styles from "./Sidebar.module.css";


const Sidebar = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { label: "Profile", icon: "fa fa-user" },
    { label: "Discover", icon: "fa fa-map" },
    { label: "Trending", icon: "fa fa-arrow-trend-up" },
    { label: "Analytics", icon: "fa-solid fa-chart-simple" },
    { label: "Favorites", icon: "fa fa-heart" },
    { label: "Reviews", icon: "fa-solid fa-pen-to-square" },
  ];

  return (
    <nav className={styles.mainMenu}>
      <div>
        <div className={styles.userInfo}>
          <img
            src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e5a707f4-d5ac-4f30-afd8-4961ae353dbc"
            alt="user"
          />
          <p>Mia Taylor</p>
        </div>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`${styles.navItem} ${
                activeNav === item.label ? styles.active : ""
              }`}
            >
              <a href="#" onClick={() => setActiveNav(item.label)}>
                <i className={`${item.icon} ${styles.navIcon}`}></i>
                <span className={styles.navText}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        <li className={styles.navItem}>
          <a href="#">
            <i className={`fa fa-gear ${styles.navIcon}`}></i>
            <span className={styles.navText}>Settings</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#">
            <i className={`fa fa-right-from-bracket ${styles.navIcon}`}></i>
            <span className={styles.navText}>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
