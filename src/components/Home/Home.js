import React from "react";
import Hero from "../Hero/Hero";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Review isHome></Review>
    </div>
  );
};

export default Home;
