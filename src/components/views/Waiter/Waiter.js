import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', lastChange: '10',status: 'free', order: null},
  {id: '2', lastChange: '13',status: 'thinking', order: null},
  {id: '3', lastChange: '21',status: 'ordered', order: 123},
  {id: '4', lastChange: '1',status: 'prepared', order: 234},
  {id: '5', lastChange: '21',status: 'delivered', order: 345},
  {id: '6', lastChange: '9',status: 'paid', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button variant='contained' color='primary'>thinking</Button>
          <Button className={styles.withMargin} variant='contained' color='primary'>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button variant='contained' color='primary'>new order</Button>
      );
    case 'ordered':
      return (
        <Button variant='contained' color='primary'>prepared</Button>
      );
    case 'prepared':
      return (
        <Button variant='contained' color='primary'>delivered</Button>
      );
    case 'delivered':
      return (
        <Button variant='contained' color='primary'>paid</Button>
      );
    case 'paid':
      return (
        <Button variant='contained' color='primary'>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Paper className={styles.wrapper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Last Change</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.lastChange} min
            </TableCell>
            <TableCell>
              {row.order && (
                <Link exact to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`} className={styles.link}>
                  <Button variant='text' color='primary'>
                    {row.order}
                  </Button>
                </Link>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;
