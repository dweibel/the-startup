import React, { Component } from "react";
import { connect } from "react-redux";
import { addIdea } from "../actions";

import Ideas from "../components/ideas.js";
import NewIdeaModal from "../components/newIdeaModal.js";
import AddNewIdeaButton from "../components/addNewIdeaButton.js";

export class Idea extends React.Component {
  addIdea(title) {
    this.props.dispatch(addIdea(title));
  }
  render() {
    return (
      <div className="idea-app-page">
        <div>
          <h1>Business Idea</h1>
          <div>
            <AddNewIdeaButton />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title
});

export default connect(mapStateToProps)(Idea);
