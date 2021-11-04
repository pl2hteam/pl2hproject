import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="./join">join</Link>
      <Link to="/mini">Mini</Link>
    </div>
  );
}

export default Navigation;
