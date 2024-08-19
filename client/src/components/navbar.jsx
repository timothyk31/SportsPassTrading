import React from "react";
import "./navbar.css";

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
                <button onClick={() => setShowSignIn(true)}>Sign in / Register</button>
            </div>
        </nav>
    );
    }

    export default Navbar;