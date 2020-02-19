import React from 'react';
import styles from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = (props) => {
  return (
    <div className={styles.component}>
      <h2>Order number {props.match.params.id} </h2>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.node,
};

export default Order;

