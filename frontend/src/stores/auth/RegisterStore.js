import {observable, makeObservable, action} from 'mobx';
import axiosInstance from '../../axios/axiosConfig';
import {validateEmail} from '../utils';

class RegisterStore {
  @observable password;
  @observable email;

  constructor() {
    makeObservable(this);
  }

  @action register = async() => {
    if (validateEmail(this.email)) {
      try {
        const res = await axiosInstance.post(`/register`, {
          email: this.email,
          password: this.password
        });

        if (res.data) {
          alert('Вы успешно зарегистрировались');
        }
      } catch(err) {
        //logi
        alert('Не удалось зарегистрироваться');
      }
    } else {
      alert('Email некорректный');
    }
  };

  @action setEmail = ({target}) => {
    this.email = target?.value;
  };

  @action setPassword = ({target}) => {
    this.password = target?.value;
  };
}

export default RegisterStore;
