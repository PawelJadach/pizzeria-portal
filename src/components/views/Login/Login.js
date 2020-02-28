import React from 'react';
import styles from './Login.module.scss';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <div>
      <Typography className={styles.title} variant="h5" align='center' color='primary'>Zaloguj się</Typography>
      <form noValidate autoComplete="off" className={styles.form}>
        <TextField
          className={styles.input}
          multiline
          required
          id="login"
          label="Login"
          variant='standard'
          color='primary'
        />
        <TextField
          className={styles.input}
          required
          multiline
          id="password"
          label="Password"
          type="password"
          variant='standard'
          color='primary'
        />
        <Button className={styles.button} variant="contained" color="primary" fullWidth>
          Zaloguj
        </Button>
      </form>
    </div>
  );
};

export default Login;

