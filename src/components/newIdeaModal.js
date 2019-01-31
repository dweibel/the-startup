import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addIdea } from "../actions";

class NewIdeaModal extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="idea-error">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field error">
        <textarea {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues, dispatch) => {
    console.log(formValues);
    this.props.addIdea(formValues);
  };

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
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="add form error"
          >
            <div className="form-group" role="form">
              <Field name="title" component={this.renderInput} />
              <h3 className="description">Write a brief description</h3>
              <Field name="description" component={this.renderInput} />
            </div>
            <button>Save!</button>
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

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please enter a business Idea";
  }
  if (!formValues.description) {
    errors.description = "Please enter a description";
  }

  return errors;
};

const mapStateToProps = state => ({
  formValues: state.formValues
});

const formWrapped = reduxForm(
  {
    form: "ideaCreate",
    validate
  },

  mapStateToProps
)(NewIdeaModal);

export default connect(
  null,
  { addIdea }
)(formWrapped);
