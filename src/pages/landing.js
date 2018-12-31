import React, { Component } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Content from "../components/content";
import Footer from "../components/footer";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <Navbar />
        <main>
          <Hero />
          <Content />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Landing;
