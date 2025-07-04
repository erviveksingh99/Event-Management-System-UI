import React from "react";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ title, rating, text }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <i
      key={i}
      className={`bx ${i < rating ? "bxs-star" : "bx-star"} ${styles.star}`}
    ></i>
  ));

  return (
    <div className={`${styles.card} ${styles.reviewCard}`}>
      <h2>{title}</h2>
      <div className={styles.ratings}>{stars}</div>
      <p>{text}</p>
    </div>
  );
};

export default ReviewCard;
