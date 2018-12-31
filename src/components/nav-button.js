import React from "react";
import "./nav-button.css";

export default function NavBarButton() {
  return (
    <div className="navbar-button">
      <button className="toggle-button">
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  );
}
