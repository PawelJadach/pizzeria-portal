import React from 'react';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div>
      <nav>
        <Link exact to={process.env.PUBLIC_URL + '/tables/booking/new'} activeClassName='active'>New Booking</Link>
        <Link exact to={process.env.PUBLIC_URL + '/tables/booking/123'} activeClassName='active'>Book 123</Link>
        <Link exact to={process.env.PUBLIC_URL + '/tables/events/new'} activeClassName='active'>New Event</Link>
        <Link exact to={process.env.PUBLIC_URL + '/tables/events/123'} activeClassName='active'>Event 123</Link>
      </nav>
    </div>
  );
};

export default Tables;

