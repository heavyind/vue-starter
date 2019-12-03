const webpack = require("webpack");
const path = require("path");
const distPath = path.resolve(__dirname, "../src");

module.exports = {
  entry: {
    settings: "./src/settings.js"
  },
  output: {
    path: distPath,
    filename: "settings.cjs",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
