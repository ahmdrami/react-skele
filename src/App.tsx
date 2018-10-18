import * as React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { APP_ROUTES } from './AppRoutes'

const App = () => (
  <BrowserRouter>
    <Switch>
      {APP_ROUTES.map(route => (
        <Route exact key={route.path} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
)

export default hot(module)(App)
