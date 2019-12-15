# Vue SSR Starter

## What it is

A Vue SSR web application that uses Vue Router, Vuex, [@heavyind/vue-trans](https://www.npmjs.com/package/@heavyind/vue-trans), [@heavyind/vue-modal](https://www.npmjs.com/package/@heavyind/vue-modal), and [@heavyind/vue-bi18n](https://www.npmjs.com/package/@heavyind/vue-bi18n).

## Who it's for

Those developing design-heavy Vue applications. It's tailored specifically for Heavy Industries needs and not general consumption, but you're more than free to poke around the code for ideas. It's MIT-licensed, so hack away.

## To use:

Open up your terminal and do this:

```
$ git clone https://github.com/heavyind/vue-starter
$ cd vue-starter 
$ npm i
$ npm run watch & node server.js 
```

The port defaults to 8080. You can optionally specify the port as the second argument to `node server.js` (e.g., `node server.js 9090`), or by setting your PORT environment variable (e.g., `export PORT=9090`). The order of precedence for port picking is 1) argument, 2) environment variable, 3) default 8080.

## License

MIT
