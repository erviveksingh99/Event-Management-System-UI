import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";

const reviews = [
  {
    title: "Metal Sculpture Workshop",
    rating: 3,
    text: "It was tough to shape metal. Easier instructions would help.",
  },
  {
    title: "Electro Groove Night",
    rating: 4.5,
    text: "Great music! Everyone was dancing. Awesome night!",
  },
  {
    title: "Wimbledon Championships - 2023",
    rating: 5,
    text: "Epic match between Djokovic and Alcaraz! Unforgettable.",
  },
];

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <h1>Past Event Reviews</h1>
      <div className={styles.reviewContainer}>
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            title={review.title}
            rating={Math.round(review.rating)}
            text={review.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
