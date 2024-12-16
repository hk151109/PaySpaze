import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Import the CSS
import Navbar from "../Components/Navbar";

const Index = () => {

  const handlePaymentRedirect = () => {
    alert("Login or Sign Up to make a payment!");
  };

  return (
    <>
        {/* Navbar */}
        <Navbar />
      {/* Main Content */}
      <div className="welcome-container">
        <div className="content">
          <h1 className="heading">Make a Payment</h1>
          <p className="subtext">
            Click the button below and fill out the form to complete your payment.
          </p>


          <button
            onClick={handlePaymentRedirect}
            className="btn btn-primary payment-button"
          >
            PAYMENT BUTTON
          </button>
        </div>
      </div>

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

export default Index;