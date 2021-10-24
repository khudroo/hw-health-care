import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";

import "./NavMenu.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function NavMenu() {
  const { user, handleLogout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand" id="custom-brand" to="/">
            <FontAwesomeIcon icon={faHospital} />{" "}
            <span className="brand-text">
              <span className="text-primary">HW</span>-HEALTH-CARE
            </span>
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 m-auto align-items-center" id="menu">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/blogs">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/review">
                  Review
                </Link>
              </li>

              {!user?.email && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-primary">Login</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {user?.email && (
            <button onClick={handleLogout} className="btn btn-primary me-2">
              Log-out
            </button>
          )}

          {user?.email && <span className="navbar-text text-white me-1">{user?.displayName}</span>}
          {user?.email && (
            <span className="profile-img">
              <img src={user?.photoURL} alt="profile" />
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavMenu;
