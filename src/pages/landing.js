import React, { Component } from "react";
import Hero from "../components/hero";
import Content from "../components/content";
import Footer from "../components/footer";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
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
