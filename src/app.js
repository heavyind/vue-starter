const Vue = require("vue");
import App from "./App.vue";
import { createRouter } from "./router";

export function createApp (ctx) {
  const router = createRouter();

  const mapp = new Vue({
    render: h => { return h(App); }
  });

  // mapp._render = function(h) {
    // return h("div", "suck my fucking dick");
  // };


  // console.log("The mapp is: ");
  // console.log(mapp);
  // console.log("The render function is:");
  // console.log(mapp._render);

  return { mapp, router };
};
