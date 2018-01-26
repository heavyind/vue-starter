const path = require("path");
const nodeExternals = require('webpack-node-externals');


const buildPath = path.resolve(__dirname, "build");
const commonModuleRules = [
  {
    test: /\.js$/,
    use: []
  },
  {
    test: /\.vue$/,
    use: [
      {
        loader: "vue-loader",
      }
    ]
  }
];

module.exports = [
  {
    target: "node",
    // Tells webpack "hey, we don't need to bundle stuff in node_modules/ like
    // Express because we're working server-side here."
    externals: [nodeExternals()],
    entry: "./src/entry-server.js",
    output: {
      path: buildPath,
      libraryTarget: "commonjs2",
      libraryExport: "default",
      filename: "server.main.js"
    },
    module: {
      rules: commonModuleRules
    }
  },
  {
    entry: "./src/entry-client.js",
    output: {
      path: buildPath,
      filename: "client.main.js"
    },
    module: {
      rules: commonModuleRules
    }
  }
];
