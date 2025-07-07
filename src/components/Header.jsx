import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`d-flex justify-content-between align-items-center px-4 py-3 shadow ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
      <div className="d-flex align-items-center">
        <h4 className="mb-0 me-3" style={{ color: darkMode ? '#fff' : '#000' }}>
          <span style={{ color: '#FF9800' }}>EVENT</span>TITANS
        </h4>
        <small className="text-muted d-none d-md-block">info@eventtitans.com | +1 (678) 999-3233</small>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button variant={darkMode ? 'outline-light' : 'outline-dark'} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </Button>
        <Button variant="outline-warning">Login</Button>
        <Button variant="outline-primary">Register</Button>
        <Button variant="danger">Create Event</Button>
      </div>
    </header>
  );
};

export default Header;