import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
