import React from "react";

class LoginModal extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render({ closeModal, title, message }) {
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

          <h2 className="modal-title">{title}</h2>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <form>
            <div className="form-group">
              <label className="email-label">Email</label>
              <input type="text" name="email" className="email-label" />
              <label className="password-label">Password</label>
              <input type="text" name="password" className="password-label" />
            </div>
          </form>
          <button
            type="button"
            className="submit-button"
            onClick={() => this.nextPath("/idea")}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default LoginModal;
