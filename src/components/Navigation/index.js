import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from './../Session';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>React-Firebase</h1>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink exact to={ROUTES.LANDING}>
            Landing
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
};

const NavigationNonAuth = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>React-Firebase</h1>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
        </li>
        <li>
          <NavLink exact to={ROUTES.LANDING}>
            Landing
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
