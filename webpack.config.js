const path = require("path");

module.exports = {
  // context: path.resolve('js'),
  entry: [
    path.join(__dirname, 'client/index.js'),
  ],
  output: {
    path: path.join( __dirname, '/build/client'),
    publicPath: "/",
    filename: "bundle.js",
  },
  watch:true,
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
              "presets": [
                "es2015",
                "react",
              ],
            },
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader",
            // loader: "style!css"
          },
          // for the sake of bootstrap and its fonts
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
          { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      ],
  },

}
