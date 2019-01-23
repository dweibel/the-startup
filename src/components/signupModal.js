import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class SignupModal extends React.Component {
  render() {
    const { closeModal } = this.props;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close-button"
            aria-label="Close"
            onClick={closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <h2 className="modal-title">Signup</h2>
          <div className="modal-body">
            <p>Please Sign Up!</p>
          </div>
          <form>
            <div className="form-group">
              <label className="firstname-label">First Name</label>
              <input type="text" name="firstname" className="firstname-label" />
              <label className="lastname-label">Last Name</label>
              <input type="text" name="lastname" className="lastname-label" />
              <label className="email-label">Email</label>
              <input type="text" name="email" className="email-label" />
              <label className="password-label">Password</label>
              <input type="text" name="password" className="password-label" />
            </div>
          </form>
          <Link to="/idea">
            <button type="button" onClick={closeModal}>
              Submit!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignupModal;
