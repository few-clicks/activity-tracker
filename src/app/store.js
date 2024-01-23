export class Store {
  constructor(reducers) {
    this.reducers = reducers;
    this.state = this._reduce();
    this.listeners = [];
  }

  _reduce() {
    return Object.keys(this.reducers).reduce((acc, key) => {
      acc[key] = this.reducers[key]();
      return acc;
    }, {});
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this._reduce(this.state, action);
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }
}
