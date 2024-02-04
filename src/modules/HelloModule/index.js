import { Element } from '@/base';
import { Header } from '@/common';
import { store } from '@/app/data';
import styles from './style.module.css';

export default () => {
  const element = new Element('div').element;
  element.classList.add(styles.hello);

  const header = new Header();
  header.subscribe(store, () => {
    header.innerText = `Hello, ${store.getState().input.text}!`;
  });

  const clicker = new Element('div');
  clicker.element.style.fontSize = '26px';
  clicker.element.style.marginLeft = '20px';
  clicker.subscribe(store, () => {
    clicker.element.innerText = `Clicks: ${store.getState().counter.value}`;
  });

  element.appendChild(header.element);
  element.appendChild(clicker.element);

  return element;
};
