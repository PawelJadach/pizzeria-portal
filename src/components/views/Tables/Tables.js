import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Tables = () => {

  const tables = [0, 1, 2, 3, 4];
  const hours = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];
  const booking = [
    {
      id: 0,
      table: 1,
      hour: '10:30',
    },
    {
      id: 1,
      table: 3,
      hour: '17:30',
    },
    {
      id: 2,
      table: 0,
      hour: '15:30',
    },
  ];

  return (
    <div>
      <Link exact to={process.env.PUBLIC_URL + `/tables/booking/new`} className={styles.link}>
        <Button color="primary" variant='contained' size='large' className={styles.new} fullWidth>
          Dodaj nową rezerwację
        </Button>
      </Link>
      <Typography variant="h5" align='center' className={styles.title}  color='primary'>Rezerwacje stolików</Typography>
      <TableContainer component={Paper} className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Godzina</TableCell>
              {tables.map(table => (
                <TableCell align="center" key={table}>
                  {table}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {hours.map(hour => (
              <TableRow key={hour}>
                <TableCell component="th" scope="row">
                  {hour}
                </TableCell>
                {tables.map(table => (
                  <TableCell key={table} className={styles.cell}>
                    {booking.map(book => {
                      if(table === book.table && hour === book.hour) return (
                        <Link exact to={process.env.PUBLIC_URL + `/tables/booking/${book.id}`} className={styles.link}>
                          <Typography color="primary" variant='overline'>
                            Rezerwacja
                          </Typography>
                        </Link>
                      );
                      else return null;
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tables;

