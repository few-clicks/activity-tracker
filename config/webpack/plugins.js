const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const getPlugins = ({ mode, analyze, paths }) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  let faviconForHtmlPlugin = '';
  if (paths.logo) {
    if (isDevelopment) faviconForHtmlPlugin = paths.logo;
  } else {
    faviconForHtmlPlugin = path.resolve(paths.public, 'icons', 'favicon.ico');
  }

  const plugins = [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'manifest.json'),
          to: 'manifest.json',
        },
        {
          from: path.resolve(paths.public, 'serviceWorkers.js'),
          to: 'sw.js',
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(paths.public, 'index.html'),
      filename: 'index.html',
      favicon: faviconForHtmlPlugin,
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
