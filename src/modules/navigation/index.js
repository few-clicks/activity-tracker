import { Element } from '@/base';

class Navigation extends Element {
  constructor() {
    super('div', { id: 'test' });
    this._element.style.height = '40px';
    this._element.style.backgroundColor = 'red';
  }
}

export default new Navigation();
