import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from './../Firebase/context';
import * as ROUTES from '../../constants/routes';

const PasswordForget = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <PasswordForgetForm />
    </div>
  );
};

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = event => {
    event.preventDefault();

    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <button
          disabled={isInvalid}
          type="submit"
          className={isInvalid ? 'btn-disabled' : 'btn btn-submit'}>
          Reset My Password
        </button>

        {error && <p className="error">{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => {
  return (
    <p>
      <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
    </p>
  );
};

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForget;

export { PasswordForgetForm, PasswordForgetLink };
