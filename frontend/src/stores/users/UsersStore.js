import { observable, makeObservable, action } from 'mobx';

class UsersStore {
  @observable users = { name: 'gavno' };

  constructor() {
    // super(props);

    makeObservable(this);
  }

  @action setUsers = (users) => (this.users = users);
}

export default UsersStore;
