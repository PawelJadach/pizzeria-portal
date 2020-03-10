import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    updateTableStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderNewOrderButton(id){
    return (
      <>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} className={styles.link}>
          <Button>new order</Button>
        </Link>
        <Button onClick={() => this.handleClick(id, 'free')}>free</Button>
      </>
    );
  }

  handleClick = (id, status) => {
    this.props.updateTableStatus(status, id);
  }

  renderActions(status, id){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.handleClick(id, 'thinking')}>thinking</Button>
          </>
        );
      case 'thinking':
        return (
          this.renderNewOrderButton(id)
        );
      case 'ordered':
        return (
          <Button onClick={() => this.handleClick(id, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.handleClick(id, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.handleClick(id, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.handleClick(id, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Link exact='true' to={process.env.PUBLIC_URL + `/waiter/order/new`} className={styles.link}>
            <Button color="primary" variant='contained' size='large' className={styles.new} fullWidth>
              Dodaj nowe zamówienie
            </Button>
          </Link>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Update</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.lastUpdate} min
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button>
                        <Link className={styles.link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                          {row.order}
                        </Link>
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
