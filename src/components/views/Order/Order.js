import React from 'react';
import PropTypes from 'prop-types';

const Order = (props) => {
  return (
    <div>
      <h2>Order number {props.match.params.id} </h2>
    </div>
  );
};

Order.propTypes = {
  match: PropTypes.node,
};

export default Order;

