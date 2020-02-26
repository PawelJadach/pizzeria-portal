import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = props => {
  return (
    <div>
      <PageNav/>
      <Toolbar/>
      <Container maxWidth="lg">
        { props.children }
      </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
