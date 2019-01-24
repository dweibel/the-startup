import React from "react";

class NewIdeaModal extends React.Component {
  render() {
    const { closeModal } = this.props;
    return (
      <div className="modal-content" id="login-modal">
        <div className="modal-header">
          <button
            type="button"
            className="close-button"
            aria-label="Close"
            onClick={closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 className="modal-title">Business Idea</h2>
          <div className="idea-body" />
          <form>
            <div className="form-group" role="form">
              <h3 className="title">Enter Your Business Idea</h3>
              <textarea className="idea-title" rows="1" cols="50" />
              <h3 className="description">Write a brief description</h3>
              <textarea className="description-textarea" rows="5 " cols="100" />
            </div>
          </form>
          <button type="submit-button" onClick={closeModal}>
            Submit!
          </button>
          <button type="cancel-button" onClick={closeModal}>
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default NewIdeaModal;
