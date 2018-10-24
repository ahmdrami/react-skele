// const HtmlWebpackPlugin = require('html-webpack-plugin');
// import webpack from 'webpack')
const path = require('path');
const webpackMerge = require('webpack-merge');

const env = process.env.NODE_ENV;
const configMode = require(`./config/webpack.${env}`).default;
// import configMode from './config/webpack.development';
// console.log(env, configMode);
// console.log('environment: ', env)
// const loadPresets = require('./config/webpack/loadPresets')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const outputDir = 'dist'

module.exports = webpackMerge(
  {
    entry: [
      // 'webpack-hot-middleware/client',
      './src/renderers/client.tsx'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    mode: env,
    // target: 'node',
    resolve: {
      extensions: ['.ts', '.tsx', '.json', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          use: {
            loader: 'ts-loader'
          }
        }
      ]
    },

    plugins: []
  },
  configMode
);
