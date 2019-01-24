import React, { Component } from "react";
import { connect } from "react-redux";
import ModalRoot from "../modalRoot.js";

import "../style/navbar.css";
import { showModal, hideModal } from "../actions/modal.js";

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  }
});

class AddNewIdeaButton extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openNewIdeaModal = this.openNewIdeaModal.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  closeModal(event) {
    this.props.hideModal();
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  showInput(event) {
    console.log(this.state);
  }

  openNewIdeaModal(event) {
    this.props.showModal(
      {
        open: true,
        closeModal: this.closeModal
      },
      "newIdea"
    );
  }
  render() {
    return (
      <div className="business-idea-button">
        <div className="add-new-button">
          <button className="add-button" onClick={this.openNewIdeaModal}>
            Add New Idea Button
          </button>
        </div>
        <ModalRoot />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddNewIdeaButton);
