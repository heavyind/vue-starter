import { createApp } from "./app";

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
  console.log(window.__INITIAL_STATE__);
}



function matchComponents(app) {
  const matched = router.getMatchedComponents(app.$route);
  Promise.all(matched.map(c => {
    if (c.asyncData) {
      return c.asyncData({ store, route: app.$route });
    }
  })).then(() => {
    app.$mount("#app");
  }).catch(function(err) { console.log(err); });
}

window.addEventListener("load", function() {
  console.log("The window initial state is: ");
  console.log(window.__INITIAL_STATE__);
  matchComponents(app);
});
  
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    console.log(to);

    let diffed = false;
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c));
    });

    if (!activated.length) {
      return next();
    }

    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to });
      }
    })).then(() => {
      next();
    }).catch(next);
  });
});

// app.$mount("#app");
