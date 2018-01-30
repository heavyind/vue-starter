import { createApp } from "./app";


export default ctx => {

  return new Promise((res, rej) => {
    const { app, router } = createApp();

    router.push(ctx.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        // return rej({ code: 404 });
      }
      res(app);
    }, rej);
  });
};
