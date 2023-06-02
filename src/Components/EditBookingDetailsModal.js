import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({ data, onSave, onClose }) => {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [date, setDate] = useState(data.date);
  const [seatNumbers, setSeatNumbers] = useState(data.seatNumbers);

  const handleSave = () => {
    const updatedData = {
      name,
      email,
      date,
      seatNumbers
    };

    onSave(updatedData);
  };
  return (
    <Modal show={true} onHide={handleSave}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSeatNumbers">
            <Form.Label>Seat Numbers</Form.Label>
            <Form.Control
              type="text"
              disabled={true}
              value={seatNumbers}
              onChange={(e) => setSeatNumbers(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
