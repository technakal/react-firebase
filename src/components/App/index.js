import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Navigation from '../Navigation';
import Landing from './../Landing/index';
import SignUp from './../SignUp/index';
import SignIn from './../SignIn/index';
import PasswordForget from './../PasswordForget/index';
import Home from './../Home/index';
import Account from './../Account/index';
import Admin from './../Admin/index';

// other imports
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from './../Session';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <div className="main">
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
