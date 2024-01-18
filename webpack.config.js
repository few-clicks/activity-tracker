const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: {
      app: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      port: 3000,
      open: true,
    },
    devtool: 'inline-source-map',
  };
};
