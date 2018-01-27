const express = require("express");
const createApp = require("../build/server.main.js");
const renderer = require("vue-server-renderer").createRenderer();

const server = express();
server.use(express.static("../public"));

server.get("*", (req, res) => {
  const ctx = { url: req.url };

  createApp(ctx).then(app => {
    renderer.renderToString(app, (err, html) => {
      res.end(generateHtml(html));
    });
  });
});


function generateHtml(content) {
  const topHalf = `
    <html>
      <head><title>Welcome</title></head>
    <body>`;

  const bottomHalf = `
        <script src="/js/main.js"></script>
      </body>
    </html>
  `;
  return topHalf + content + bottomHalf;
}


server.listen(9090);
