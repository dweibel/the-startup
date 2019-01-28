import React from "react";
import { connect } from "react-redux";

import IdeaCard from "../components/ideaCard.js";
import NewIdeaModal from "../components/newIdeaModal.js";

import { addIdea } from "../actions";

export class Ideas extends React.Component {
  addCard(idea) {
    this.props.dispatch(addIdea(idea, this.props.index));
  }

  render() {
    const ideas = this.props.ideas.map((idea, index) => (
      <li key={index}>
        <IdeaCard {...idea} />
      </li>
    ));
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul className="list">
          {ideas}
          <li>
            <NewIdeaModal type="idea" onAdd={title => this.addIdea(title)} />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ideas: state.ideas
});

Ideas.defaultProps = {
  title: ""
};

export default connect()(Ideas);
