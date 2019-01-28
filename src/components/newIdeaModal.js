import React from "react";
import { connect } from "react-redux";

class NewIdeaModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.titleInput.value.trim();
    if (title && this.props.onAdd) {
      this.props.onAdd(this.titleInput.value);
    }
    this.titleInput.value = "";
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }
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
          <h3 className="title">Enter Your Business Idea</h3>
          <form className="add-form" onSubmit={this.onSubmit}>
            <input
              type="title-input"
              ref={input => (this.titleInput = input)}
            />
            <button>Add</button>
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

const mapStateToProps = state => ({
  ideas: state.ideas
});
export default connect(mapStateToProps)(NewIdeaModal);
