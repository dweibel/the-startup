import React from "react";
import "./navbar.css";
import NavBarButton from "./nav-button";

export default function Navbar() {
  return (
    <div className="navbar">
      <header className="navbar-header">
        <nav className="nabar-navigation">
          <div>
            <NavBarButton />
          </div>
          <div className="navbar-logo">
            <a href="/">The Startup</a>
          </div>

          <div className="spacer" />
          <div className="navbar-items">
            <ul>
              <li>
                <a href="/">Sign up</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
