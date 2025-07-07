import React from "react";
import { ProgressBar, Card, Row, Col } from "react-bootstrap";

function Dashboard({ darkMode }) {
  // Sample Data
  const upcomingEvents = 5;
  const pastEvents = 12;
  const registeredEvents = 7;
  const totalAttendees = 146;

  const eventProgress = Math.round((registeredEvents / (upcomingEvents + pastEvents)) * 100);

  const cardTheme = darkMode ? "bg-secondary text-light" : "bg-white text-dark";

  return (
    <Row className="g-4">
      <Col md={3}>
        <Card className={cardTheme}>
          <Card.Body>
            <Card.Title>Upcoming Events</Card.Title>
            <h3>{upcomingEvents}</h3>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}>
        <Card className={cardTheme}>
          <Card.Body>
            <Card.Title>Past Events</Card.Title>
            <h3>{pastEvents}</h3>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}>
        <Card className={cardTheme}>
          <Card.Body>
            <Card.Title>Registered Events</Card.Title>
            <h3>{registeredEvents}</h3>
          </Card.Body>
        </Card>
      </Col>

      <Col md={3}>
        <Card className={cardTheme}>
          <Card.Body>
            <Card.Title>Total Attendees</Card.Title>
            <h3>{totalAttendees}</h3>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12}>
        <Card className={cardTheme}>
          <Card.Body>
            <Card.Title>Registration Progress</Card.Title>
            <ProgressBar now={eventProgress} label={`${eventProgress}%`} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
