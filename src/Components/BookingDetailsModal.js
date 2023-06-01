import React from "react";
import { Modal } from "react-bootstrap";

const BookingDetailsModal = ({ data, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Name:</label>
          <p>{data.name}</p>
        </div>
        <div>
          <label>Email:</label>
          <p>{data.email}</p>
        </div>
        <div>
          <label>Date:</label>
          <p>{data.date}</p>
        </div>
        <div>
          <label>Seat Numbers:</label>
          <p>{data.seatNumbers.join(", ")}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BookingDetailsModal;
