const { merge } = require("webpack-merge");
const common = require("./webpack-config.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    hot: true,
    client: {
      logging: "info",
      overlay: true,
    },
    compress: true,
    open: true,
    static: "./build",
  },
  stats: {
    errorDetails: true,
  },
});
