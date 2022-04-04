import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="header-container">
      <div className="laptop-title">
        <h1>Your Next Laptop</h1>
        <h1 className="blue-color">Your Best Laptop</h1>
        <p>
          Laptops combine all the input/output components and capabilities of a
          desktop computer, including the display screen, small speakers, a
          keyboard, data storage device, sometimes an optical disc drive,
          pointing devices (such as a touch pad or pointing stick), with an
          operating system, a processor and memory into a single unit.
        </p>
        <button className="laptop-btn">Learn More</button>
      </div>
      <div className="laptop-image">
        <img
          src="https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1482.jpg?t=st=1649060760~exp=1649061360~hmac=d8e9184bb1998a5de51de9a14c228cdfba51bd74076db784d40512a975d42d36&w=740"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
