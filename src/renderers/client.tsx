import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, { IUser } from '../shared/App';
import { BrowserRouter } from 'react-router-dom';

const users: IUser[] = (window as any).initialData;
const initialData = { users: (window as any).initialData };
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
