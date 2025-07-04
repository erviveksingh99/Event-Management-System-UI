import React from "react";
import styles from "./EventCard.module.css";

const EventCard = ({ event, onLike, liked }) => {
  return (
    <div className={`${styles.card} ${styles.eventCard}`}>
      <div className={styles.eventHeader}>
        <img src={event.image} alt="event" />
        <p>{event.date}</p>
        <i
          className={`bx ${liked ? "bxs-heart" : "bx-heart"} ${styles.heart}`}
          onClick={onLike}
        ></i>
      </div>
      <div className={styles.eventContent}>
        <h2>{event.title}</h2>
        <p>{event.location}</p>
      </div>
      <div className={styles.eventFooter}>
        <p style={{ backgroundColor: event.tagColor }}>{event.tag}</p>
        <div className={styles.btnGroup}>
          <button>Buy Ticket</button>
          <div className={styles.share}>
            <button className={styles.shareBtn}>
              <i className="fa-solid fa-share"></i>
            </button>
            {/* You can add popup logic here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
