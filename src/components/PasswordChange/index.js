import React, { Component } from 'react';
import { withFirebase } from './../Firebase';

const INITIAL_STATE = {
  password: '',
  confirmPassword: '',
  error: null,
};

class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    event.preventDefault();
    const { password } = this.state;

    this.props.firebase
      .doPasswordUpdate(password)
      .then(() => this.setState({ ...INITIAL_STATE }))
      .catch(error => this.setState({ error }));
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { password, confirmPassword, error } = this.state;
    const isInvalid = password !== confirmPassword || password === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="password"
          type="password"
          onChange={this.onChange}
          placeholder="New Password"
          value={password}
          autoComplete="new-password"
        />
        <input
          name="confirmPassword"
          type="password"
          onChange={this.onChange}
          placeholder="Confirm New Password"
          value={confirmPassword}
          autoComplete="new-password"
        />
        <button
          disabled={isInvalid}
          type="submit"
          className={isInvalid ? 'btn-disabled' : 'btn-submit'}>
          Reset My Password
        </button>
        {error && <p className="error">{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
