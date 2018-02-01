const express = require("express");
const path = require("path");
// const serverBundle = () => require("./dist/server.main.json");
const serverBundle = "/Users/chaseries/Desktop/vue-ssr-starter/dist/server.main.json";
const { createBundleRenderer } = require("vue-server-renderer");

const isProduction = process.env.NODE_ENV === "production";
const skeletonPath = "./src/skeleton.html";
const clientManifest = require("./dist/client-manifest.json");
const server = express();


server.use(express.static("./dist"));

server.get("*", (req, res) => {

  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: require("fs").readFileSync("./src/skeleton.html", "utf-8"),
    clientManifest
  });

  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    res.end(html);
  });
});


server.listen(process.argv[2] || 8080);
