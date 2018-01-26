const server = require("express")();
const createApp = require("../build/server.main.js");
const renderer = require("vue-server-renderer").createRenderer();

server.get("*", (req, res) => {
  const ctx = { url: req.url };


  createApp(ctx).then(app => {

    // console.log("The app is:");
    // console.log(app);
    // console.log("The rendered output is:");
    // console.log(renderer.renderToString(createApp(ctx), function(e,h) {}));


    renderer.renderToString(createApp(ctx), (err, html) => {
      console.log(err);
      res.end(html);
    });
  });

});


server.listen(9090);
