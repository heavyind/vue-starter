# Vue SSR Starter

## To use:

```
$ npm run watch
$ node server.js <port number> `# defaults to 8080`
```

## What it is

A Vue server side rendered web application with built-in tools to animate elements in and out via CSS transition during route changes. It also includes a preloader and a modal.

## A note about architecture

The driving idea behind this project is to allow users to trigger outro animations on child elements before and after route changes. Vue's philosophy on DOM updates, much as Vue's philosophy on routing, can make this tricky. Vue intends to be deterministic in both cases, meaning data and route are the single source of truth behind updates. Neither can be superceded. Vue does, however, offer just enough wiggle room in the form of its `<transition>` components to make things possible without major hacks.

Specifically, Vue provides for explicit leave `duration`s on its `<transition>`s. If no `transition` property is specified within CSS, the apparent effect is simply a delay before an element is removed\*: it hangs around for however many milliseconds it's programmed to before disappearing. When applied to a transition over `<router-view>`, we can delay any visible navigation updates while fancy `leave` animations get to work within child components. (Animations on `enter` aren't as difficult, for reasons that are probably obvious.) Looking at the URL within the browser's navigation bar upon route changes will prove that state is being updated according to Vue principles, and behavior in general should work as expected.

This project tries to be as robust as possible, but it is, unfortunately, a web of interconnected state that *needs* to fire in the appropriate sequence. This has to do with fundamental constraints of how Vue updates its virtual DOM. When a conditionally-rendered element's test evaluates to `false`, Vue abandons it and will neither pass it prop updates nor mutate its internal state. This is expected behavior—and sensibly justified—as data acts as the source of truth for rendering, and therefore the component no longer exists as far as Vue is concerned, even if it temporarily remains in the actual DOM for the sake of the transition.

Thus for animations that depend on component or prop state to occur, such as child component outro animations between parent route changes, the child data must be updated first. Examples include

* **Preloading** Preload `done` state exists within the preload store module. The `<preloader>` component must be informed of updates to it (i.e., that preloading has finished) before the master logic in `./src/App.vue` kills off `<preloader>`'s logical branch in favor of the main app content. Thus a proxy variable called `ready` is used within `./src/App.vue` rather than the status given directly by the store. This proxy variable is updated to reflect preload status only in the next tick to ensure that the `<preloader>` component gets a hold of the update first, allowing it to use it to trigger its own outro transition before the one in `App.vue`.

...more to come...

\*The component (not the actual DOM object) is already gone, though. Log something within `destroyed` to test this.
