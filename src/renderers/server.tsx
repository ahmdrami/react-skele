import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../shared/App';
import axios from 'axios';

const serverRenderer = async (url: string) => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    initialData: resp.data,
    initialMarkup: renderToString(
      <StaticRouter location={url} context={{}}>
        <App users={resp.data} />
      </StaticRouter>
    )
  };
};

export default serverRenderer;
