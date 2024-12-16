import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const HomeRedirect = () => {
    navigate("/");
  };
  // Single function for both buttons
  const handleSignInRedirect = () => {
    navigate("/AuthpPage?signin=false");
  };

  const handleSignUpRedirect = () => {
    navigate("/AuthpPage?signin=true");
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
          onClick={handleSignInRedirect}
          className="btn login"
        >
          LOG IN
        </button>
        <button 
          onClick={handleSignUpRedirect}
          className="btn signup"
        >
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
