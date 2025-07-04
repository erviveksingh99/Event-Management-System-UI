import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./Analytics.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ["Concert", "Workshop", "Theatre", "Sport"],
    datasets: [
      {
        label: "Event Types",
        data: [10, 5, 3, 2],
        backgroundColor: [
          "#e48e2c",
          "#582bac",
          "#b31a4d",
          "#4a920f",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.analytics}>
      <h1>Analytics</h1>

      <div className={styles.analyticsContainer}>
        <div className={styles.totalEvents}>
          <div className={`${styles.eventNumber} ${styles.card}`}>
            <h2>Past Events</h2>
            <p>20</p>
            <i className="bx bx-check-circle"></i>
          </div>
          <div className={`${styles.eventNumber} ${styles.card}`}>
            <h2>Upcoming Events</h2>
            <p>3</p>
            <i className="bx bx-timer"></i>
          </div>
        </div>

        <div className={styles.chart}>
          <h2>Distribution of Attended Events</h2>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
