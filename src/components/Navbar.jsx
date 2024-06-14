import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "./navbar.css"
import img from "./images/logo.png"


const Navbar = () => {
  return (
    <nav>
      <Link to="/home" className="logo"><img src={img}></img></Link>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/notifications">Notification</NavLink>
        </li>
        <li>
        <NavLink to="/FAQ">FAQ</NavLink>
        </li>
        <li>
        <NavLink to="/pastdrives">Past Drives</NavLink>
        </li>
        <li>
        <NavLink to="/applications">Applications</NavLink>
        </li>
      </ul>
    </nav>

  
  );
}

export default Navbar