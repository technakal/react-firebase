import React from 'react';

import { withAuthorization } from './../Session';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>The home page is accessbile to signed in users.</p>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
