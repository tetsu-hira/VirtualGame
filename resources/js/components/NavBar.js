import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="Header">
        <ul className="nav">
          <a href="/">
            <li className="HeaderButton">Start</li>
          </a>
          <Link to="/">
            <li className="HeaderButton">Top</li>
          </Link>
          <Link to="/about">
            <li className="HeaderButton">About</li>
          </Link>
          <Link to="/user">
            <li className="HeaderButton">User</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default NavBar;