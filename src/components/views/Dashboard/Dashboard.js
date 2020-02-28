import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Dashboard = () => {

  function createData(name, count, prize) {
    return { name, count, prize };
  }

  const rows = [
    createData('Zdalne', 12, 225),
    createData('Lokalne', 31, 1025),
  ];

  const reservation = [
    {
      id: 0,
      hour: '15:00',
      table: 3,
      bonus: ['butelka wina'],
    },
    {
      id: 1,
      hour: '16:00',
      table: 2,
      bonus: [],
    },
    {
      id: 2,
      hour: '15:00',
      table: 1,
      bonus: ['butelka wina', 'chleb'],
    },
    {
      id: 3,
      hour: '10:00',
      table: 5,
      bonus: ['butelka wina', 'woda gazowana, ciastko'],
    },
    {
      id: 4,
      hour: '20:00',
      table: 5,
      bonus: ['butelka wina', 'kawa'],
    },
  ];

  const events = [
    {
      id: 0,
      hour: '15:00',
      table: 3,
      bonus: ['butelka wina'],
    },
    {
      id: 1,
      hour: '16:00',
      table: 2,
      bonus: [],
    },
    {
      id: 2,
      hour: '15:00',
      table: 1,
      bonus: ['butelka wina', 'chleb'],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Typography variant="h5" align='center' className={styles.title}  color='primary'>Statystyki dzisiejszych zamówień</Typography>
      <TableContainer component={Paper} className={styles.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rodzaj zamówienia</TableCell>
              <TableCell align="right">Liczba</TableCell>
              <TableCell align="right">Wartość</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.count}</TableCell>
                <TableCell align="right">{row.prize} $</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" align='center' className={styles.title} color='primary'>Dzisiejsze rezerwacje i eventy</Typography>
      <div className={styles.reservation}>
        {reservation.map(reserv => (
          <Card className={styles.card} key={reserv.id}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Rezerwacja
              </Typography>
              <Typography variant="h5" component="h2">
                {reserv.hour}
              </Typography>
              <Typography color="textSecondary">
                Stolik nr {reserv.table}
              </Typography>
              {reserv.bonus.map(bonus => (
                <Typography variant="body2" component="p" key={bonus}>
                  {bonus}
                </Typography>
              ))}
            </CardContent>
            <CardActions>
              <Link exact to={process.env.PUBLIC_URL + `/tables/booking/${reserv.id}`} className={styles.link}>
                <Button variant='contained' size="small" color='primary'>Więcej</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
        {events.map(event => (
          <Card className={styles.card} key={event.id}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Wydarzenie
              </Typography>
              <Typography variant="h5" component="h2">
                {event.hour}
              </Typography>
              <Typography color="textSecondary">
                Stolik nr {event.table}
              </Typography>
              {event.bonus.map(bonus => (
                <Typography variant="body2" component="p" key={bonus}>
                  {bonus}
                </Typography>
              ))}
            </CardContent>
            <CardActions>
              <Link exact to={process.env.PUBLIC_URL + `/tables/events/${event.id}`} activeClassName='active'>
                <Button variant='contained' size="small" color='primary'>Więcej</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

