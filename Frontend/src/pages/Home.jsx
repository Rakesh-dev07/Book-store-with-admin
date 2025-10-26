import React from "react";
import Hero from "../components/Home/Hero";
import RecentlyAdded from "../components/Home/RecentlyAdded";
import SPR from "../components/Home/SPR";
import AllBooks from "../pages/AllBooks";
import Review from "../components/Slider/Review";
import Cont from "../components/Home/Cont";
import Slider1 from "../components/Slider/Slider1";
import Slider2 from "../components/Slider/Slider2";

const Home = () => {
  return (
    <div>
      <div className="bg-zinc-900 text-white px-10 py-8">
        <Slider1 />
        <Hero />
        <RecentlyAdded />
        <Slider2 />
      </div>
      <SPR />
      <Review />
      <Cont />
    </div>
  );
};

export default Home;