import React from "react";
import LazyHero from "react-lazy-hero";
import image from "../assets/priscilla-du-preez-95313-unsplash.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <LazyHero imageSrc={image}>
        <h1>The Startup</h1>
      </LazyHero>
    </div>
  );
}
