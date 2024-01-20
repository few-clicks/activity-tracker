const getDevServer = ({ port }) => {
  return {
    port,
    open: true,
  };
};

module.exports = getDevServer;
