const path = require("path");
const baseConfig = require("./webpack.base.config.js");
const distPath = path.resolve(__dirname, "../dist/");


module.exports = {
  distPath,
  baseConfig
};
