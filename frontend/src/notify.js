import {store} from 'react-notifications-component';

export const notify = (title, message, type) => store.addNotification({
  title,
  message,
  type,
  insert: 'top',
  container: 'top-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 2000,
    onScreen: true
  }
});