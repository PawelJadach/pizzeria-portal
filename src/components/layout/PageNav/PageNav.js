import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const PageNav = () => {
  return (
    <AppBar>
      <Container maxWidth="lg" >
        <Toolbar disableGutters >
          <nav className={styles.right}>
            <Button component={NavLink} exact to={process.env.PUBLIC_URL + '/'} activeClassName={styles.active} className={styles.link}>Dashboard</Button>
            <Button component={NavLink} exact to={process.env.PUBLIC_URL + '/kitchen'} activeClassName={styles.active} className={styles.link}>Kitchen</Button>
            <Button component={NavLink} exact to={process.env.PUBLIC_URL + '/login'} activeClassName={styles.active} className={styles.link}>Login</Button>
            <Button component={NavLink} exact to={process.env.PUBLIC_URL + '/tables'} activeClassName={styles.active} className={styles.link}>Tables</Button>
            <Button component={NavLink} exact to={process.env.PUBLIC_URL + '/waiter'} activeClassName={styles.active} className={styles.link}>Waiter</Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default PageNav;
