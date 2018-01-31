const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const VueSsrServerPlugin = require("vue-server-renderer/server-plugin");
const imports = require("./imports");


module.exports = webpackMerge(imports.baseConfig, {
  target: "node",
  entry: "./src/entry-server.js",
  output: {
    path: imports.distPath,
    libraryTarget: "commonjs2",
    libraryExport: "default",
    filename: "server.main.js"
  },
  plugins: [
    // Import NODE_ENV into webpack, which tells Uglify to remove all devel-
    // opment code blocks from Vue. Reduces final bundle size by ~230KB at 
    // the time of writing.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      "process.env.VUE_ENV": "'server'"
    })
  ]
});
