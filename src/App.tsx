import React from 'react';
import Header from './components/header';
import Grid from '@material-ui/core/Grid';
import Router from './router/router';
import './App.css';

function App() {
  return (
    <Grid>
      <Header />
      <Router />
    </Grid>
  );
}

export default App;
