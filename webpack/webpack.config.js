const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const minicssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: ['./src/app/index.js'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.js'
  },

  devServer: {
    host: '0.0.0.0',
    port: 8000
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          minicssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            //console.log(pathData)
            return pathData.filename.slice(3, pathData.filename.length);
          },
        }
      },

    ]
  },

  //devtool: 'eval-source-map',

  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

    new minicssExtractPlugin({
      filename: './styles/css/style.css'
    })
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  }

}