/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faUser,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/image1.png";

export default function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <a href="#" className="logo">
          <img src={Logo} width="160" height="50" alt="logo" />
        </a>

        <button
          className="nav-open-btn"
          data-nav-open-btn
          aria-label="Open Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <nav className="navbar" data-navbar>
          <button
            className="nav-close-btn"
            data-nav-close-btn
            aria-label="Close Menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <a href="#" className="logo">
            <img src={Logo} width="190" height="50" alt="logo" />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Products
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Shop
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Blog
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>

          <ul className="nav-action-list">
            <li>
              <button className="nav-action-btn">
                <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                <span className="nav-action-text">Search</span>
              </button>
            </li>

            <li>
              <a href="#" className="nav-action-btn">
                <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                <span className="nav-action-text">Login / Register</span>
              </a>
            </li>

            <li>
              <button className="nav-action-btn">
                <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
                <span className="nav-action-text">Wishlist</span>
                <data className="nav-action-badge" value="5" aria-hidden="true">
                  5
                </data>
              </button>
            </li>

            <li>
              <button className="nav-action-btn">
                <FontAwesomeIcon icon={faShoppingBag} aria-hidden="true" />
                <data className="nav-action-text" value="318.00">
                  Basket: <strong>$318.00</strong>
                </data>
                <data className="nav-action-badge" value="4" aria-hidden="true">
                  4
                </data>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
