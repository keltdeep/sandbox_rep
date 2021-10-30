import {observable, makeObservable, action, autorun, computed} from 'mobx';
import {useAxios} from '../../axios/useAxios';
import {notify} from '../../notify';

class DucksFactoryStore {
  @observable ducks;
  @observable duckName;
  @observable typeDuck;
  @observable isOpenDrawer;

  constructor({AuthStore}) {
    makeObservable(this);
    this.AuthStore = AuthStore;

    this.disposerDucksFactory = autorun(() => this.getDucks(this.isLogged));
  }

  @computed get isLogged() {
    return this.AuthStore?.isLogged;
  }

  @action setDucks = (ducks) => {
    this.ducks = ducks;
  };

  @action setDuckName = ({target}) => {
    this.duckName = target?.value;
  }

  @action setTypeDuck = ({target}) => {
    this.typeDuck = target?.value;
  }

  @action setDrawerStatus = (status) => {
    this.isOpenDrawer = status;
  }

  getDucks = async(isLogged) => {
    if (!isLogged) {
      return;
    }

    try {
      const ducks = await useAxios('/ducks/get');

      if (ducks) {
        this.setDucks(ducks);
      }
    } catch(err) {
      //logi
      alert('Не удалось получить уток');
    }
  };

  createDuck = async() => {
    if (this.duckName && this.typeDuck) {
      try {
        const duck = await useAxios(
          '/ducks/create',
          {
            name: this.duckName,
            type: this.typeDuck,
            user: localStorage.getItem('userId')
          },
          'post'
        );

        if (duck) {
          notify('Уведомления', 'Утка успешно создана', 'success');
          this.getDucks(true);
          this.setDrawerStatus(false);
        }
      } catch(err) {
        notify('Ошибка', 'Не удалось создать утку', 'danger');
      }
    } else {
      notify('Ошибка', 'Заполните поля', 'warning');
    }
    //
  }

  closeStore = () => {
    this.disposerDucksFactory();
  };
}

export default DucksFactoryStore;
