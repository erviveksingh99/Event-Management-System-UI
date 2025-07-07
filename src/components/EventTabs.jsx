import React, { useState } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import EventCard from './EventCard';

const EventTabs = ({ darkMode }) => {
  const upcomingEvents = [1, 2, 3, 4];
  const pastEvents = [5, 6];

  return (
    <Tabs defaultActiveKey="upcoming" className="mb-3">
      <Tab eventKey="upcoming" title="Upcoming Events">
        <Row className="g-3">
          {upcomingEvents.map((id) => (
            <Col md={6} lg={4} key={id}>
              <EventCard darkMode={darkMode} isPaid={id % 2 === 0} />
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="past" title="Past Events">
        <Row className="g-3">
          {pastEvents.map((id) => (
            <Col md={6} lg={4} key={id}>
              <EventCard darkMode={darkMode} isPaid={id % 2 === 0} />
            </Col>
          ))}
        </Row>
      </Tab>
    </Tabs>
  );
};

export default EventTabs;