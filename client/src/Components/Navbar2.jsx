import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar2 = () => {
  const navigate = useNavigate();

  const HomeRedirect = () => {
    navigate("/");
  };
  // Single function for both buttons
  const handleLogoutRedirect = () => {
    navigate("/Home");
  };

  return (
    <nav className="navbar">

      <button
      onClick={HomeRedirect}
      className="btn navbar-button"
      >
      <div className="navbar-brand">
        <span className="pay">Pay</span>
        <span className="spaze">Spaze</span>
      </div>
      </button>


      <div className="navbar-buttons">
        <button 
          onClick={handleLogoutRedirect}
          className="btn signup"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
