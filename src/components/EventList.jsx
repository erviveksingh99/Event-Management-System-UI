import React, { useState } from "react";
import EventCard from "./EventCard";
import styles from "./EventList.module.css";

const events = [
  {
    title: "Acoustic Serenade",
    location: "Skyline Amphitheater",
    date: "March 19, 8:00 PM",
    tag: "Concert",
    tagColor: "#e48e2c",
    image: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/697ef286-1104-4c6c-91d6-0b2a1e04009b",
  },
  {
    title: "Latin Rhythms Fusion",
    location: "Dance Studio X",
    date: "March 22, 8:00 PM",
    tag: "Workshop",
    tagColor: "#582bac",
    image: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/19cc9b1d-0dd6-4e4e-ab5c-1d9efd443953",
  },
  // Add more events as needed
];

const EventList = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  return (
    <div className={styles.upcomingEvents}>
      <h1>Upcoming Events</h1>
      <div className={styles.eventContainer}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            liked={likedIndex === index}
            onLike={() =>
              setLikedIndex(likedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
