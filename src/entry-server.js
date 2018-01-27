import { createApp } from "./app";


export default ctx => {

  return new Promise((res, rej) => {
    const { mapp, router } = createApp(ctx);

    // console.log(mapp);
    router.push(ctx.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        // return rej({ code: 404 });
      }
      res(mapp);
    }, rej);
  });
};
