import { Element } from '@/base';
import './style.scss';

export default class extends Element {
  constructor(text) {
    super('div');
    this._element.innerText = text;
    this._element.classList.add('header');
  }

  updateText(text) {
    this._element.innerText = text;
  }
}
