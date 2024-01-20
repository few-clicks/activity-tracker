const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const getPlugins = ({ mode, paths }) => {
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const plugins = [
    new HtmlWebPackPlugin({
      template: paths.template,
      filename: 'index.html',
    }),
  ];

  isDevelopment && plugins.push(new webpack.ProgressPlugin());
  isProduction &&
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css',
      })
    );

  return plugins;
};

module.exports = getPlugins;
