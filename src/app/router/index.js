class Router {
  constructor(pageId = 'page', isHashRouter = true) {
    !isHashRouter && console.log('url routing is not available now');
    this.pageId = pageId;

    window.addEventListener('hashchange', (event) => {
      this._resolve();
    });

    window.addEventListener('DOMContentLoaded', () => {
      this._resolve();
    });
  }

  initRoutes(routes) {
    this._routes = routes;
  }

  initPageContainer(element) {
    this._pageContainer = element;
    this._pageContainer.id = 'page-container';
  }

  _resolve() {
    if (location.hash === '') {
      this._pageContainer.innerHTML = '';
      this._pageContainer.appendChild(this._routes['/']);

      return;
    }

    this._pageContainer.innerHTML = '404 | Not Found';
  }
}

export default new Router();
