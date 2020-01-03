import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import { withFirebase } from './../Firebase/context';
import * as ROUTES from '../../constants/routes';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <div className="centered">
        <PasswordForgetLink />
      </div>
      <div className="centered">
        <SignUpLink />
      </div>
    </div>
  );
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          onChange={this.onChange}
          placeholder="Password"
        />
        <button
          disabled={isInvalid}
          className={isInvalid ? 'btn-disabled' : 'btn btn-submit'}
          type="submit">
          Sign In
        </button>
        {error && <p className="error">{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignIn;

export { SignInForm };
