

export const transitions = {
  default: {
    name: "default",
    duration: { leave: 800, enter: 0 }
  },
  instant: {
    name: "instant",
    duration: { leave: 0, enter: 0 }
  }
};

export const preload = {
  duration: { leave: 400, enter: 0 }
};

export const pageMeta = {
  "/": {
    title: "Set Home title in ./src/settings.js",
    metaDescription: "Set me in ./src/settings.js"
  },
  "/about": {
    title: "Set About title in ./src/settings.js",
    metaDescription: "Set me in ./src/settings.js"
  }
};
