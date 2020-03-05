import React from 'react';
import styles from './TableNewBooking.module.scss';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const TableNewBooking = () => {

  const starters = [
    {
      name: 'wino',
      price: 10,
    },
    {
      name: 'piwo',
      price: 5,
    },
    {
      name: 'chleb',
      price: 2,
    },
    {
      name: 'orzeszki',
      price: 4,
    },
  ];

  const generateStarters = () => {
    let startersHtml = [];

    starters.map(starter => {
      return startersHtml.push(
        <div className={styles.flex} key={starter.name}>
          <Typography color="caption" variant='body2' >
            {starter.name}
            <Checkbox
              color="primary"
              value={`${starter.name}`}
            />
          </Typography>
          <Typography color="primary" variant='body1' >
            {starter.price} $
          </Typography>
        </div>
      );
    });
    return startersHtml;
  };

  const generateMenuItem = (numbers) => {
    let menuItems = [];

    for(let i = 1; i <= numbers; i++){
      menuItems.push(
        <MenuItem key={i} value={`${i}`}>
          {i}
        </MenuItem>
      );
    }
    return menuItems;
  };

  const generateTimeMenuItem = (numbers) => {
    let menuItems = [];

    for(let i = 0.5; i <= numbers; i += 0.5){
      menuItems.push(
        <MenuItem key={i} value={`${i}`}>
          {i}h
        </MenuItem>
      );
    }
    return menuItems;
  };

  return (
    <div>
      <Typography className={styles.title} variant="h5" align='center' color='primary'>Dodaj nową rezerwację</Typography>
      <form noValidate autoComplete="off" className={styles.form}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date"
            label="Wybierz datę rezerwacji"
            // value={selectedDate}
            // onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time"
            label="Wybierz godzinę rezerwacji"
            // value={selectedDate}
            // onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          fullWidth
          id="time"
          select
          // value={this.state.table}
          // onChange={this.handleTableChange}
          helperText="Wybierz czas rezerwacji"
          className={styles.input}
        >
          {generateTimeMenuItem(3)}
        </TextField>
        <TextField
          fullWidth
          id="table"
          select
          // value={this.state.table}
          // onChange={this.handleTableChange}
          helperText="Wybierz stolik"
          className={styles.input}
        >
          {generateMenuItem(5)}
        </TextField>
        <TextField
          fullWidth
          id="people"
          select
          // value={this.state.table}
          // onChange={this.handleTableChange}
          helperText="Wybierz liczbę osób"
          className={styles.input}
        >
          {generateMenuItem(6)}
        </TextField>
        <Typography color="primary" variant='h6'>
          Starter
        </Typography>
        {generateStarters()}
        <Button className={styles.button} variant="contained" color="primary" fullWidth>
          Zarezerwuj
        </Button>
      </form>
    </div>
  );
};

export default TableNewBooking;

// {
//       "id": 1,
//       "date": "2019-10-26",
//       "hour": "16:00",
//       "table": 2,
//       "duration": 3,
//       "ppl": 4,
//       "starters": [
//         "water"
//       ]
//     }
