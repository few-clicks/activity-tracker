const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getModules = ({ mode }) => {
  const isProduction = mode === 'production';

  return {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  };
};

module.exports = getModules;
