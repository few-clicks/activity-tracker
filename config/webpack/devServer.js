const getDevServer = ({ port }) => {
  return {
    port,
    open: true,
    hot: true,
  };
};

module.exports = getDevServer;
