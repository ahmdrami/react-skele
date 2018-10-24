import * as React from 'react';
// import { hot, setConfig } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './Routes';
// import { APP_ROUTES } from './AppRoutes';

// setConfig({ logLevel: 'no-errors-please' });

// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       {APP_ROUTES.map(route => (
//         <Route exact key={route.path} {...route} />
//       ))}
//     </Switch>
//   </BrowserRouter>
// );

export interface IUser {
  name: string;
  username: string;
}
interface IProps {
  users?: any;
}

const App: React.SFC<IProps> = () => {
  return (
    <Switch>
      {ROUTES.map(route => (
        <Route exact key={route.path} {...route} />
      ))}
    </Switch>
  );
};

// export default hot(module)(App);
export default App;
