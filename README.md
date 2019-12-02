# Vue SSR Starter

## To use:

```
$ npm run watch
$ node server.js <port number> `# defaults to 8080`
```

## What it is

A Vue server side rendered web application with built-in tools to animate elements in and out via CSS transition during route changes. It also includes a preloader and a modal.

## A note about architecture

This project tries to be as robust as possible, but it is, unfortunately, a web of interconnected state that *needs* to fire in the appropriate sequence. This has to do with fundamental constraints of how Vue updates its virtual DOM. When a conditionally-rendered element's test evaluates to `false`, Vue abandons it and will neither pass it prop updates nor mutate its internal state. This is expected behavior—and sensibly justified—as data acts as the source of truth for rendering, and therefore the component no longer exists in the virtual DOM. For fancy animations, though, it complicates things.

Thus for animations that depend on component or prop state to occur, such as child component outro animations between parent route changes, the child data must be updated first. Examples include

* **Preloading** Preload `done` state exists within the preload store module. The `<preloader>` component must be informed of updates to it (i.e., that preloading has finished) before the master logic in `./src/App.vue` kills off `<preloader>`'s 'logical branch in favor of the main app content. Thus a proxy variable called `ready` is used within `./src/App.vue` rather than the status given directly by the store. This proxy variable is updated to reflect preload status only in the next tick to ensure that the `<preloader>` component gets a hold of the update first, allowing it to use it to trigger its own outro transition before the one in `App.vue`.

...more to come...


