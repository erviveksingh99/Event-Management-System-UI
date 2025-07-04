import React from "react";
import styles from "./ContactCard.module.css";

const ContactCard = ({ user }) => {
  return (
    <div className={styles.contactStatus}>
      <div className={styles.contactActivity}>
        <img src={user.img} alt={user.name} />
        <p>
          {user.name} {user.action} <span>{user.event}</span>
        </p>
      </div>
      <small>{user.timeAgo}</small>
    </div>
  );
};

export default ContactCard;
