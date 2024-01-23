export class Store {
  constructor(reducers) {
    this.reducers = reducers;
    const stateFromLocalStorage = JSON.parse(localStorage.getItem('state'));
    if (stateFromLocalStorage) {
      this.state = stateFromLocalStorage;
    } else {
      this.state = this._reduce();
    }
    this.listeners = [];
  }

  _reduce(state, action) {
    return Object.keys(this.reducers).reduce((acc, key) => {
      acc[key] = this.reducers[key](state && state[key], action);
      return acc;
    }, {});
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this._reduce(this.state, action);
    localStorage.setItem('state', JSON.stringify(this.state));
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}
