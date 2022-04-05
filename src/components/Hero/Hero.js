import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="my-auto">
        <h1 className="font-black text-5xl ">Your Next Laptop</h1>
        <h1 className="blue-color font-black text-blue-500 text-5xl">
          Your Best Laptop
        </h1>
        <p className="my-4 font-medium text-gray-400">
          Laptops combine all the input/output components and capabilities of a
          desktop computer, including the display screen, small speakers, a
          keyboard, data storage device, sometimes an optical disc drive,
          pointing devices (such as a touch pad or pointing stick), with an
          operating system, a processor and memory into a single unit.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3  text-lg">
          Learn More
        </button>
      </div>
      <div className="hero-image">
        <img
          src="https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1482.jpg?w=740"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
