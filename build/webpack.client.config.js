const webpackMerge = require("webpack-merge");
const imports = require("./imports");


module.exports = webpackMerge(imports.baseConfig, {
  entry: "./src/entry-client.js",
  output: {
    path: imports.distPath,
    filename: "client.main.js"
  }
});
