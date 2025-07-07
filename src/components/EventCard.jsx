import React from 'react';
import { Card, Badge, ProgressBar } from 'react-bootstrap';

const EventCard = ({ darkMode, isPaid }) => {
  const cardBg = darkMode ? 'bg-secondary text-light' : 'bg-white text-dark';

  return (
    <Card className={`shadow-sm ${cardBg}`}>      
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww" alt="Event" />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Badge bg={isPaid ? 'danger' : 'success'}>{isPaid ? 'Paid' : 'Free'}</Badge>
          <Badge bg="info">Online Event</Badge>
        </div>
        <Card.Title>Webinar on React 2025</Card.Title>
        <Card.Text>
          📍 New Delhi <br /> 📅 12 Aug 2025
        </Card.Text>
        <div>
          <small>Registrations</small>
          <ProgressBar now={70} label={`70%`} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
