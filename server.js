const express = require("express");
const path = require("path");
const { createBundleRenderer } = require("vue-server-renderer");

const isProduction = process.env.NODE_ENV === "production";
const clientManifest = require("./dist/client-manifest.json");
const serverBundlePath = path.resolve(__dirname, "dist/app.server.json");
const skeletonPath = path.resolve(__dirname, "./src/skeleton.html");
const server = express();
const settings = require("./settings.js");

const DEFAULT_PORT = 8080;


server.use(express.static("./public"));
server.use(express.static("./dist"));

server.get("*", (req, res) => {

  const currentPageSettings = settings.pageMeta[req.url];

  const renderer = createBundleRenderer(serverBundlePath, {
    runInNewContext: false,
    template: require("fs").readFileSync(skeletonPath, "utf-8"),
    clientManifest
  });

  const context = { 
    url: req.url,
    title: currentPageSettings ? currentPageSettings.title : "",
    metaDescription: currentPageSettings ? currentPageSettings.title : ""
  };

  renderer.renderToString(context, (err, html) => {
    if (!isProduction) {
      console.log(err);
    }
    res.end(html);
  });
});


const portArgPassed = !!process.argv[2];
const portEnvPassed = !!process.env.PORT;
const makePortArgMsg = (p) => `Running on PORT argument ${p}.`;
const makePortEnvMsg = (p) => `Running on PORT environment variable ${p}.`;
const makeDefaultPortMsg = (p) => `Running on default PORT ${p}.`;

if (portArgPassed) {
  console.log(makePortArgMsg(process.argv[2]));
} else if (portEnvPassed) {
  console.log(makePortEnvMsg(process.env.PORT));
} else {
  console.log(makeDefaultPortMsg(DEFAULT_PORT));
}

server.listen(process.argv[2] || process.env.PORT || 8080);
