import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <nav>
        <Link exact to={process.env.PUBLIC_URL + '/waiter/order/new'} activeClassName='active'>New Order</Link>
        <Link exact to={process.env.PUBLIC_URL + '/waiter/order/123'} activeClassName='active'>Order 123</Link>
      </nav>
    </div>
  );
};

export default Waiter;

