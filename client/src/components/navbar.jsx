import React from "react";
import "./navbar.css";
import SignInPopup from "./SignInPopup";
import RegistrationPopup from "./RegistrationPopup";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Pass it Back</h1>
      </div>

      <div className="nav-links">
        <a href="/">Sports Passes</a>
        <a href="/games">Away Game Tickets</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <RegistrationPopup />
        <SignInPopup />
      </div>
    </nav>
  );
};

export default Navbar;
