import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {inject} from 'mobx-react';
import PropTypes from 'prop-types';
import './auth.scss';

@inject(({RegisterStore}) => {
  return {
    setEmail: RegisterStore.setEmail,
    email: RegisterStore.email,
    setPassword: RegisterStore.setPassword,
    password: RegisterStore.password,
    register: RegisterStore.register
  };
})
class SignUp extends Component {
  render() {
    const {setEmail, email, setPassword, password, register} = this.props;

    return (
      <Container className={'marginAuth'} component='main' maxWidth='xs'>
        <CssBaseline />
        <div>
          <Typography component='h1' variant='h5'>
            Register
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
          <Button
            onClick={register}
            fullWidth={true}
            variant='contained'
            color='primary'
          >
            {'Sign Up'}
          </Button>
          <Grid container={true}>
            <Grid item={true}>
              <Link href='/' variant='body2'>
                {'Sign In'}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

SignUp.propTypes = {
  setEmail: PropTypes.func,
  email: PropTypes.string,
  register: PropTypes.func,
  setPassword: PropTypes.func,
  password: PropTypes.string
};

export default SignUp;
