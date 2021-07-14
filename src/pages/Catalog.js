import React from "react";
import Hero from "../components/Hero";
import Listings from "../components/Listings";
// import Features from "../components/Features";
import { SliderDataTwo } from "../data/SliderData";

const Catalog = () => {
  return <Hero slides={SliderDataTwo} />;
};

export default Catalog;
