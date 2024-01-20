const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  const plugins = [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
  ];

  isDevelopment && plugins.push(new webpack.ProgressPlugin());

  return {
    entry: {
      app: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins,
    devServer: {
      port: 3000,
      open: true,
    },
    devtool: isDevelopment && 'inline-source-map',
  };
};
