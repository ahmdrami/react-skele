const MiniCssExtractPugin = require('mini-css-extract-plugin');

module.exports = {
   output: {
      filename: "bundle.[chunkhash].js"
   },
   module: {
      rules: [
         // {
         //    test: /\.css$/,
         //    use: [MiniCssExtractPugin.loader, "css-loader"]
         // }
      ]
   },
   plugins: [new MiniCssExtractPugin()]
}