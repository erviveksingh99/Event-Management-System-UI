import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import styles from "./Dashboard.module.css";
import EventList from "./EventList";
import Reviews from "./Reviews";
import Analytics from "./Analytics"
import Contacts from "./Contacts";
import InteractionControls from "./InteractionControls";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Chart } from "react-chartjs-2";



const Dashboard = () => {
    const [activeNav, setActiveNav] = useState("Profile");
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    useEffect(() => {
        document.body.classList.toggle("darkmode", darkMode);
    }, [darkMode]);

    return (
        <>
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <SearchBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <EventList />
                    <Reviews />
                    {/* more sections coming next */}
                </div>

                <div className={styles.rightContent}>
                    <InteractionControls toggleDarkMode={toggleDarkMode} />
                    <Analytics />
                    <Contacts />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
