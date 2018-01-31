const express = require("express");
const appBundle = require("./dist/server.main.json");
const { createBundleRenderer } = require("vue-server-renderer");


const isProduction = process.env.NODE_ENV === "production";
const skeletonPath = "./src/skeleton.html";
const server = express();

const renderer = createBundleRenderer(appBundle, {
  runInNewContext: false,
  template: require("fs").readFileSync("./src/skeleton.html", "utf-8"),
  clientManifest: false
});

server.use(express.static("./public"));

server.get("*", (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    res.end(html);
  });
});


server.listen(process.argv[2] || 8080);
