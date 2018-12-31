import React from "react";
import LazyHero from "react-lazy-hero";

export default function Hero() {
  return (
    <div className="hero">
      <LazyHero imageSrc="https://unsplash.it/2000/1000">
        <h1>The Startup</h1>
      </LazyHero>
    </div>
  );
}
