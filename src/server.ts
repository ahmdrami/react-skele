import * as express from 'express';
import webpack from 'webpack';
import settings from '../config/settings';
import * as path from 'path';
import serverRenderer from './renderers/server';
// import { ROUTES } from './shared/Routes';
// import { matchPath } from 'react-router-dom';

// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from './webpack.common';
// import chalk from 'chalk';

// const compiler = webpack(webpackConfig);
const app = express();
app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(
//   webpackDevMiddleware(compiler, {
//     logLevel: 'warn',
//     publicPath: webpackConfig.output.publicPath,
//     watchOptions: {
//       ignored: ['node_modules']
//     }
//   })
// );

// app.use(
//   webpackHotMiddleware(compiler, {
//     log: console.log,
//     path: '/__webpack_hmr',
//     heartbeat: 10 * 1000
//   })
// );

app.get('*', async (req, res) => {
  const initialContent = await serverRenderer(req.url);
  // const test = matchPath(req.path, { path: '/test' });
  // console.log(test, req.path);
  // const activeRoute = ROUTES.find(route => matchPath(req.path, route)) || {};
  res.render('index', { ...initialContent });
});

if (require.main === module) {
  app.listen(settings.port, () =>
    console.log(`Server listening on port ${settings.port}`)
  );
}

export default app;
