import { createApp } from "./app";


export default ctx => {

  return new Promise((fulfill, reject) => {
    const { app, router, store } = createApp();

    router.push(ctx.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store: store,
            route: router.currentRoute
          });
        }
      })).then(() => {
        ctx.state = store.state;
        fulfill(app);
      }).catch(function(e) {
        console.log(e);
      });

    }, reject);
  });
};
