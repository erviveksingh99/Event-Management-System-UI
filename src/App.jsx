// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EventTabs from './components/EventTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <EventTabs darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
