const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getModules = ({ mode }) => {
  const isProduction = mode === 'production';

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isProduction
          ? '[hash:base64:8]'
          : '[local]__[path][name]',
      },
    },
  };

  return {
    rules: [
      {
        oneOf: [
          {
            test: /\.module\.css$/i,
            use: [MiniCssExtractPlugin.loader, cssLoaderWithModules],
          },
          {
            test: /\.module\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              cssLoaderWithModules,
              'sass-loader',
            ],
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'sass-loader'],
          },
        ],
      },
    ],
  };
};

module.exports = getModules;
