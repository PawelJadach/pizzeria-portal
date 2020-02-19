import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';

const PageNav = () => {
  return (
    <nav>
      <NavLink exact to={process.env.PUBLIC_URL + '/'} activeClassName={styles.active}>Dashboard</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/kitchen'} activeClassName={styles.active}>Kitchen</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/login'} activeClassName={styles.active}>Login</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/tables'} activeClassName={styles.active}>Tables</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/waiter'} activeClassName={styles.active}>Waiter</NavLink>
    </nav>
  );
};


export default PageNav;
