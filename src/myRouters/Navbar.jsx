import React from "react";
import { Link, NavLink } from "react-router";
import "../myRouters/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-con">
        <div className="logo">
          <Link to="/">React</Link>
        </div>
        <div className="inks">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid red" : "none",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-Link"
                to="/about"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid red" : "none",
                  };
                }}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-Link"
                to="/contact"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid red" : "none",
                  };
                }}
              >
                Contact
              </NavLink>
              <NavLink
                className="nav-Link"
                to="/Search"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid red" : "none",
                  };
                }}
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
