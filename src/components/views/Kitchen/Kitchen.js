import React from 'react';
import styles from './Kitchen.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Kitchen = () => {

  const orders = [
    {
      id: 0,
      number: 123515,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 1,
      table: 3,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 2,
      number: 124151,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 3,
      number: 125516,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 4,
      table: 2,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 5,
      number: 123456,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 6,
      number: 123457,
      dishes: ['tutaj będą zamówione dania'],
    },
    {
      id: 7,
      table: 4,
      dishes: ['tutaj będą zamówione dania'],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Typography variant="h5" align='center' className={styles.title} color='primary'>Zamówienia</Typography>
      <div className={styles.reservation}>
        {orders.map(order => (
          <Card className={styles.card} key={order.id}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {order.table ? `Numer stolika ${order.table}` : `Zamówienie nr ${order.number}`}
              </Typography>
              <Typography variant="subtitle1">
                {order.dishes}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='contained' size="small" color='primary'>Gotowe</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;

