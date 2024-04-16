const clientRouter = {
  push: (url: string) => window.history.pushState(undefined, "", url),
  replace: (url: string) => window.history.replaceState(undefined, "", url),
};

export default clientRouter;
