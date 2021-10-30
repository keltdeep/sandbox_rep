import {observable, makeObservable, computed, action} from 'mobx';
import {useAxios} from '../../axios/useAxios';
import {validateEmail} from '../utils';
import {notify} from '../../notify';

class AuthStore {
  @observable password;
  @observable email;
  @observable verifyCode;
  @observable isModal = false;
  @observable codeForUser;

  constructor({RoutingStore}) {
    makeObservable(this);

    this.RoutingStore = RoutingStore;
  }

  checkCode = async(code) => {
    const reg = new RegExp('^\\d+$');

    if (reg.test(code)) {
      const res = await useAxios(
        '/redis/get',
        {
          key: this.email
        }
      );

      if (res === Number(code)) {
        return true;
      }
      notify('Уведомление', 'Вы ввели неправильный код', 'info');
    } else {
      notify('Уведомление', 'Введите цифры', 'danger');
    }

    return false;
  };

  @computed get isLogged() {
    let hasToken = false;

    document.cookie.split(';').forEach((elem) => {
      const [key] = elem.split('=');

      if (key === 'token') {
        hasToken = true;
      }
    });

    return hasToken;
  }

  @action setVerifyCode = ({target}) => {
    this.verifyCode = target?.value;
  };

  @action setCodeForUser = (code) => {
    this.codeForUser = code;
  }

  getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  @action setIsModal = async(status) => {
    if (this.email?.length && this.password?.length) {
      this.isModal = status;
      const randomCode = this.getRandomArbitrary(1000, 9999).toFixed();

      const res = await useAxios(
        '/redis/set',
        {
          'key': this.email,
          'value': randomCode
        },
        'post'
      );

      if (res) {
        this.setCodeForUser(randomCode);
      }

    }
  };

  authorize = async() => {
    const checked = await this.checkCode(this.verifyCode);

    if (!checked) {
      return;
    }

    if (validateEmail(this.email)) {
      try {
        const res = await useAxios(
          '/auth',
          {
            email: this.email,
            password: this.password
          },
          'post'
        );

        if (res) {
          // eslint-disable-next-line max-len
          document.cookie = `token=${
            res.accessToken
          };Secure;HttpOnly;Expires=${new Date().setMilliseconds(
            2 * 60 * 60 * 1000
          )}`;
          localStorage.setItem('userId', res.userId);
          this.RoutingStore.history.push('/ducksFactory');
          notify('Уведомление', 'Вы успешно авторизовались', 'info');
        }
      } catch(err) {
        notify('Ошибка', 'Не удалось авторизоваться', 'danger');
      }
    } else {
      notify('Ошибка', 'Email некорректный', 'danger');
    }
  };

  @action setEmail = ({target}) => {
    this.email = target?.value;
  };

  @action setPassword = ({target}) => {
    this.password = target?.value;
  };
}

export default AuthStore;
