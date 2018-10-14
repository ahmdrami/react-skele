const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config.babel')
const compiler = webpack(webpackConfig)
const chalk = require('chalk');

const app = express()
app.use(
  webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
      ignored: ['node_modules']
    }
  })
)

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

if (require.main === module) {
  app.listen(3000, () => console.log(chalk.blue('Server listening on port 3000')))
}
