import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './auth.scss';

@inject(({AuthStore}) => {
  return {
    setEmail: AuthStore.setEmail,
    email: AuthStore.email,
    setPassword: AuthStore.setPassword,
    password: AuthStore.password,
    authorize: AuthStore.authorize,
    isModal: AuthStore.isModal,
    setIsModal: AuthStore.setIsModal,
    setCheckCode: AuthStore.setCheckCode,
    setVerifyCode: AuthStore.setVerifyCode,
    codeForUser: AuthStore.codeForUser,
    verifyCode: AuthStore.verifyCode
  };
})

class SignIn extends Component {
  render() {
    const {setEmail, email, setPassword, password, authorize, setIsModal, setVerifyCode, codeForUser, verifyCode,
      isModal} = this.props;

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4
    };

    return (
      <Container className={'marginAuth'} component='main' maxWidth='xs'>
        <CssBaseline />
        <div>
          <Typography component='h1' variant='h5'>
            {'Sign in'}
          </Typography>
          <TextField
            variant='outlined'
            margin='normal'
            required={true}
            fullWidth={true}
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus={true}
            onChange={setEmail}
            value={email || ''}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required={true}
            fullWidth={true}
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={setPassword}
            value={password || ''}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            onClick={() => setIsModal(true)}
            // onClick={authorize}
            fullWidth={true}
            variant='contained'
            color='primary'
          >
            {'Sign In'}
          </Button>
          <Grid container={true}>
            <Grid item={true} xs={true}>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item={true}>
              <Link href='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Modal
          open={isModal}
          onClose={() => setIsModal(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <React.Fragment>
            <Box sx={style}>
              <React.Fragment>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  {`Введите проверочный код ${codeForUser || ''}`}
                </Typography>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required={true}
                  fullWidth={true}
                  name='verifyCode'
                  label='verifyCode'
                  onChange={setVerifyCode}
                  value={verifyCode || ''}
                />
                <Button
                  onClick={authorize}
                  fullWidth={true}
                  variant='contained'
                  color='primary'
                >
                  {'Вход'}
                </Button>
              </React.Fragment>
            </Box>
          </React.Fragment>
        </Modal>
      </Container>
    );
  }
}

SignIn.propTypes = {
  setEmail: PropTypes.func,
  email: PropTypes.string,
  authorize: PropTypes.func,
  setPassword: PropTypes.func,
  password: PropTypes.string,
  isModal: PropTypes.bool,
  setIsModal: PropTypes.func,
  setVerifyCode: PropTypes.func,
  codeForUser: PropTypes.number,
  verifyCode: PropTypes.number
};

export default SignIn;
