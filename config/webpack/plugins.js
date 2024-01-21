const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const getPlugins = ({ mode, analyze, paths }) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  const plugins = [
    new HtmlWebPackPlugin({
      template: path.resolve(paths.public, 'index.html'),
      filename: 'index.html',
      favicon: paths.logo || path.resolve(paths.public, 'icons', 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
  ];

  isDevelopment && plugins.push(new webpack.ProgressPlugin());

  if (isProduction) {
    analyze && plugins.push(new BundleAnalyzerPlugin());
    paths.logo && plugins.push(new FaviconsWebpackPlugin(paths.logo));
  }

  return plugins;
};

module.exports = getPlugins;
