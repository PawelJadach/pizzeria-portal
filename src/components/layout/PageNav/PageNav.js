import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';

const PageNav = () => {
  return (
    <nav>
      <NavLink exact to={process.env.PUBLIC_URL + '/'} activeClassName={styles.active} className={styles.navLink}>Dashboard</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/kitchen'} activeClassName={styles.active} className={styles.navLink}>Kitchen</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/login'} activeClassName={styles.active} className={styles.navLink}>Login</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/tables'} activeClassName={styles.active} className={styles.navLink}>Tables</NavLink>
      <NavLink exact to={process.env.PUBLIC_URL + '/waiter'} activeClassName={styles.active} className={styles.navLink}>Waiter</NavLink>
    </nav>
  );
};


export default PageNav;
