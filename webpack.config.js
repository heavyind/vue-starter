path = require("path");


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
    entry: "./src/server.js",
    output: {
      path: buildPath,
      filename: "server.main.js",
      publicPath: "static"
    },
    module: {
      rules: commonModuleRules
    }
  },
  {
    entry: "./src/client.js",
    output: {
      path: buildPath,
      filename: "client.main.js",
      publicPath: "static"
    },
    module: {
      rules: commonModuleRules
    }
  }
];
