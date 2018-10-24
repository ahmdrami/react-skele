const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: `!!raw-loader!${path.join(process.cwd(), 'src/index.template.ejs')}`
  // filename: path.resolve(__dirname, 'views/index.ejs'),
  // minify: {
  //   removeComments: true,
  //   collapseWhitespace: true,
  //   conservativeCollapse: true,
  // },
});

module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'source-map-loader'
      // }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
