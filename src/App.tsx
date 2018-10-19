import * as React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { APP_ROUTES } from './AppRoutes';

setConfig({ logLevel: 'no-errors-please' });

const App = () => (
  <BrowserRouter>
    <Switch>
      {APP_ROUTES.map(route => (
        <Route exact key={route.path} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default hot(module)(App);
