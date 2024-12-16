import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import "./Welcome.css"; // Import the CSS
import Navbar2 from "../Components/Navbar2";

const Welcome = () => {

  const navigate = useNavigate();

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Open and close modal
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle form submission inside modal
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted!");
    setShowModal(false); // Close modal after submission
  };

  const handlePaymentRedirect = () => {
    navigate("/PaymentPage");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Main Content */}
      <div className="welcome-container">
        <div className="content">
          <h1 className="heading">Make a Payment</h1>
          <p className="subtext">
            Click the button below and fill out the form to complete your payment.
          </p>

          {/* Modal Trigger Button */}
          <button
            onClick={handleOpenModal}
            className="btn btn-primary payment-button"
          >
            PAYMENT BUTTON
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Make a Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePaymentSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>To *</Form.Label>
              <Form.Control type="text" placeholder="Recipient Name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>From *</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount *</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Payment Description" />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#team" className="footer-link">Team</a>
        </div>
        <p className="footer-text">Copyright © 2024 - All rights reserved by PaySpaze</p>
      </footer>
    </>
  );
};

export default Welcome;
