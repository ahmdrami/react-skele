const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack')
const path = require('path');
const webpackMerge = require('webpack-merge');
const { CheckerPlugin } = require('awesome-typescript-loader');

const env = process.env.NODE_ENV;
const configMode = require(`./config/webpack.${env}`);
console.log(configMode);
// console.log('environment: ', env)
// const loadPresets = require('./config/webpack/loadPresets')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const outputDir = 'dist'

module.exports = webpackMerge(
  {
    entry: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index.tsx'
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
        //  {
        //    test: /\.jpe?g$/,
        //    use: [
        //      {
        //        loader: 'url-loader',
        //        options: {
        //          limit: 5000
        //        }
        //      }
        //    ]
        //  },

        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
                ],
                '@babel/preset-typescript',
                '@babel/preset-react'
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                'react-hot-loader/babel'
              ]
            }
          }
        }
      ]
    },

    plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
      }),
      
    ]
  },
  configMode
);
//
//  loadPresets({ mode, presets })
