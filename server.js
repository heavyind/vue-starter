const express = require("express");
const createApp = require("./dist/server.main.js");
const vueServerRenderer = require("vue-server-renderer");

const renderer = vueServerRenderer.createRenderer({
  template: require("fs").readFileSync("./src/layout.html", "utf-8")
});


const server = express();
server.use(express.static("./public"));

server.get("*", (req, res) => {
  const context = { url: req.url };

  createApp(context).then(app => {
    renderer.renderToString(app, context, (err, html) => {
      res.end(html);
    });
  }).catch(function(e) {
    console.log(e);
  });
});


server.listen(9090);
