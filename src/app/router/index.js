class Router {
  constructor(pageId = 'page', isHashRouter = true) {
    !isHashRouter && console.log('url routing is not available now');
    this.pageId = pageId;

    window.addEventListener('hashchange', (event) => {
      this._resolve();
    });
  }

  initRoutes(routes) {
    this._routes = routes;
  }

  route(route) {
    if (this._routes[route]) {
      return route;
    }
    console.error('This row is now exist:', route);
    return '/';
  }

  navigate = (url) => {
    history.pushState(null, null, url);
  };

  _resolve() {
    if (location.hash === '') {
      this._routes['/']();

      return;
    }

    const route = location.hash.replace('#', '/');
    if (this._routes[route]) {
      this._routes[route]();
    } else {
      this._routes[404]();
    }
  }
}

export default new Router();
