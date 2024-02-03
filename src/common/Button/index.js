import './style.css';
import { Element } from '@/base';

export default class extends Element {
  constructor(text, color, onClick) {
    super('button');
    this._element.innerText = text;
    this._element.classList.add('button');
    this._element.style.backgroundColor = color;
    this._element.onclick = onClick;
  }
}
