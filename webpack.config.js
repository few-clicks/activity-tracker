const path = require('path');
require('dotenv').config();
const getWebpackConfiguration = require('./config/webpack/index.js');

const logoPath = process.env.LOGO_PATH
  ? path.resolve(__dirname, process.env.LOGO_PATH)
  : '';

module.exports = (_, argv) => {
  const options = {
    mode: argv.mode,
    paths: {
      entry: path.resolve(__dirname, process.env.ENTRY_PATH),
      output: path.resolve(__dirname, process.env.OUTPUT_PATH),
      public: path.resolve(__dirname, process.env.PUBLIC_PATH),
      src: path.resolve(__dirname, process.env.SRC_PATH),
      logo: logoPath,
    },
    port: process.env.DEV_PORT,
  };

  return getWebpackConfiguration(options);
};
