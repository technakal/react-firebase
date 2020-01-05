import React, { Component } from 'react';
import { withFirebase } from './../Firebase';

class Admin extends Component {
  state = {
    loading: false,
    users: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on(`value`, snapshot => {
      const userObject = snapshot.val();
      const usersList = Object.keys(userObject).map(key => ({
        ...userObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    console.log(users);

    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        const { roles } = user;
        return (
          <div className="user-card" key={user.uid}>
            <p>
              <span className="label">ID:</span> {user.uid}
            </p>
            <p>
              <span className="label">Email: </span>
              {user.email}
            </p>
            <p>
              <span className="label">Username: </span>
              {user.username}
            </p>
            {user.roles ? user.roles.ADMIN ? <h3>Is Admin</h3> : null : null}
          </div>
        );
      })}
    </div>
  );
};
export default withFirebase(Admin);
