const vue = require('vue');

module.exports = function createApp(context) {
  return new vue({
    data: {
      url: context.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  });
}
