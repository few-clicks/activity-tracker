const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const getPlugins = ({ mode, paths }) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  const plugins = [
    new HtmlWebPackPlugin({
      template: paths.template,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
  ];

  isDevelopment && plugins.push(new webpack.ProgressPlugin());
  isProduction && plugins.push(new BundleAnalyzerPlugin());

  return plugins;
};

module.exports = getPlugins;
