import React, { Component } from "react";
import NavBarButton from "./nav-button";
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

const MESSAGE = "A redux modal component.";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
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

  openLoginModal(event) {
    this.props.showModal(
      {
        open: true,
        title: "Login Modal",
        message: MESSAGE,
        closeModal: this.closeModal
      },
      "login"
    );
  }

  render() {
    return (
      <div className="navbar">
        <header className="navbar-header">
          <nav className="nabar-navigation">
            <div>
              <NavBarButton />
            </div>
            <div className="navbar-logo">
              <a href="/">The Startup</a>
            </div>

            <div className="spacer" />
            <div className="navbar-items">
              <ul>
                <li>
                  <a href="/">Sign up</a>
                </li>
                <li>
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={this.openLoginModal}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <ModalRoot />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
