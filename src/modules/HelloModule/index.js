import { Element } from '@/base';
import { Header } from '@/common';
import { store } from '@/app/data';
import styles from './style.module.css';

export default () => {
  const element = new Element('div').element;
  element.classList.add(styles.hello);

  const header = new Header();
  const updateName = () => {
    header.updateText(`Hello, ${store.getState().input.text}!`);
  };
  store.subscribe(updateName);
  updateName();
  element.appendChild(header.element);

  const clicker = new Element('div').element;
  clicker.style.fontSize = '26px';
  clicker.style.marginLeft = '20px';
  element.appendChild(clicker);

  const updateValue = () => {
    clicker.innerText = `Clicks: ${store.getState().counter.value}`;
  };
  store.subscribe(updateValue);
  updateValue();

  return element;
};
