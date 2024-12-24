import React, { useState } from "react";
import Logo from "../assest/navlogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../style/Navbar.css";

function Navbar() {
  const [openlinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openlinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openlinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/program">Program</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/program">Program</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/signup" className="signup">
          Sign Up
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
