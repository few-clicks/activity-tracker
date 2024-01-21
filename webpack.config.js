const path = require('path');
require('dotenv').config();
const getWebpackConfiguration = require('./config/webpack/index.js');

module.exports = (_, argv) => {
  const options = {
    mode: argv.mode,
    paths: {
      entry: path.resolve(__dirname, process.env.ENTRY_PATH),
      output: path.resolve(__dirname, process.env.OUTPUT_PATH),
      template: path.resolve(__dirname, process.env.TEMPLATE_PATH),
      src: path.resolve(__dirname, process.env.SRC_PATH),
    },
    port: process.env.DEV_PORT,
  };

  return getWebpackConfiguration(options);
};
