import React, { Component } from "react";
import { connect } from "react-redux";
import { addIdea } from "../actions";

import AddNewIdeaButton from "../components/addNewIdeaButton.js";
export class Idea extends React.Component {
  compnentDidMount() {
    this.props.addIdea();
  }
  render() {
    console.log(this.props.idea);
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
  formValues: state.idea
});

export default connect(
  mapStateToProps,
  { addIdea }
)(Idea);
