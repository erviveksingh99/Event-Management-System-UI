import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Sidebar = ({ darkMode }) => {
  const bg = darkMode ? 'bg-dark text-light' : 'bg-white text-dark';

  return (
    <div className={`p-3 shadow-sm ${bg}`}>
      <h5 className="mb-4">Filter Events</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="e.g. India" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Event name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <div className="d-flex gap-2">
            <Form.Control type="date" />
            {/* <Form.Control type="date" /> */}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Type</Form.Label>
          <Form.Select>
            <option>All</option>
            <option>Online</option>
            <option>Offline</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Paid/Free</Form.Label>
          <Form.Select>
            <option>All</option>
            <option>Paid</option>
            <option>Free</option>
          </Form.Select>
        </Form.Group>

        <Button variant="warning" className="w-100">Apply Filters</Button>
      </Form>
    </div>
  );
};

export default Sidebar;
