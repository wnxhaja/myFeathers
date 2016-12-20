const webpackConfig = require("./webpack.config");
const webpack = require("webpack");

webpackConfig.watch = false;

webpackConfig.plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    "process.env": {
       NODE_ENV: JSON.stringify("production"),
     },
  }),
];

module.exports = webpackConfig;
