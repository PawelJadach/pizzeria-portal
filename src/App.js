import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Event from './components/views/Event/Event';
import Kitchen from './components/views/Kitchen/Kitchen';
import NewEvent from './components/views/NewEvent/NewEvent';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import TableBooking from './components/views/TableBooking/TableBooking';
import TableNewBooking from './components/views/TableNewBooking/TableNewBooking';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Event} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TableNewBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TableBooking} />

                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
