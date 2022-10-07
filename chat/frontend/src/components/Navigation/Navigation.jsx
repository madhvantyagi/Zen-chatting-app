import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <Link className="Link" to="/">
        Home
      </Link>
      <Link className="Link" to="/chat">
        Chat
      </Link>
      <Link className="Link" to="/user">
        Create User
      </Link>
    </div>
  );
}

export default Navigation;
