import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject(({ UsersStore }) => {
  return {
    users: UsersStore.users,
  };
})
class UsersList extends Component {
  render() {
    const { users } = this.props;
    return <div>{users.name}</div>;
  }
}

export default UsersList;
