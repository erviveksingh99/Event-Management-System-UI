import React from "react";
import ContactCard from "./ContactCard";
import styles from "./Contacts.module.css";

const users = [
  {
    img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e56800db-687d-4d0e-a470-51e37a4431c7",
    name: "Matt",
    action: "favored",
    event: "Jazz Fusion Night",
    timeAgo: "1 hour ago",
  },
  {
    img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fac9f27b-c1ea-4bba-973f-88996322fa2d",
    name: "Bella",
    action: "bought a ticket for",
    event: "Acoustic Serenade",
    timeAgo: "4 hours ago",
  },
  {
    img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1499d73c-ccc0-41a1-b530-1d629012aebd",
    name: "Lucas",
    action: "bought a ticket for",
    event: "Wimbledon 2024",
    timeAgo: "1 day ago",
  },
  {
    img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/949768d4-0196-486c-b386-edb47ddd54c2",
    name: "Sophia",
    action: "favored",
    event: "Clay Sculpting Class",
    timeAgo: "1 day ago",
  },
];

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1>Contacts</h1>
      <div className={styles.contactsContainer}>
        {users.map((user, idx) => (
          <ContactCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
