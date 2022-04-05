import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Review isHome></Review>
      <div className="text-center bg-green-50 pb-36">
        <Link to="/review">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 text-lg">
            See All Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
