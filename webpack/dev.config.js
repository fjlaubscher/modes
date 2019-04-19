const config = require('./config');

const port = process.env.PORT || 3000;

module.exports = Object.assign(
  {
    mode: 'development',
    devServer: {
      stats: 'minimal',
      hot: true,
      port,
      writeToDisk: true,
      overlay: true,
      publicPath: `http://localhost:${port}/`,
      historyApiFallback: true
    }
  },
  config
);
