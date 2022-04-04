import React from "react";
import Customlink from "../Customlink/Customlink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <Customlink to="/home">Home</Customlink>
      <Customlink to="/review">Review</Customlink>
      <Customlink to="/dashboard">Dashboard</Customlink>
      <Customlink to="/blog">Blog</Customlink>
      <Customlink to="/about">About</Customlink>
    </nav>
  );
};

export default Header;
