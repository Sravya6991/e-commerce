import React from "react";
import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <header id="header">
      <nav
        className="navbar bg-dark text-light navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand me-3" to="/">
            My Shoppie
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  My Orders
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default GuestHeader;
