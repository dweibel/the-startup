import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Please Login</h1>
        <div className="form-Group">
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
    );
  }
}

export default LoginForm;
