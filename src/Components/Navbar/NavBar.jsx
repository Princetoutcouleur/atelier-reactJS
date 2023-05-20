import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar text-light py-3 d-flex justify-content-end">
      <div className="d-flex me-3">
        <Link
          to="/register"
          className="btn btn-dark rounded-pill bg-black me-3"
        >
          Sign Up
        </Link>
        <Link to="/connexion" className="btn btn-light rounded-pill">
          Login
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
