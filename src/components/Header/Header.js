import React from "react";
import Customlink from "../Customlink/Customlink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="bg-slate-800 flex justify-around items-center p-5">
      <div>
        <h2 className="text-white font-bold text-lg">PRODUCT ANALYSIS</h2>
      </div>
      <div className="flex">
        <Customlink to="/home">Home</Customlink>
        <Customlink to="/review">Review</Customlink>
        <Customlink to="/dashboard">Dashboard</Customlink>
        <Customlink to="/blog">Blog</Customlink>
        <Customlink to="/about">About</Customlink>
      </div>
    </nav>
  );
};

export default Header;
