import React, { Component } from "react";
import IdeaCard from "../components/ideaCard.js";
import AddNewIdeaButton from "../components/addNewIdeaButton.js";

class Idea extends Component {
  render() {
    return (
      <div className="idea-app-page">
        <div>
          <h1>Business Idea</h1>
        </div>

        <div />
        <AddNewIdeaButton />
        <IdeaCard />
      </div>
    );
  }
}

export default Idea;
