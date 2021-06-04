import React from 'react';
import Home from '../pages/home/home';
import Menu from '../pages/menu/menu';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props: any) => <Home {...props} />} />
      <Route exact path="/menu" render={(props: any) => <Menu {...props} />} />
    </Switch>
  );
}
