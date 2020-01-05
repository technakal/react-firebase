import React from 'react';
import { PasswordForgetForm } from './../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from './../Session';

const Account = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <div>
            <h2 className="centered">Forgot My Password</h2>
            <PasswordForgetForm />
          </div>
          <div>
            <h2 className="centered">Change My Password</h2>
            <PasswordChangeForm />
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
