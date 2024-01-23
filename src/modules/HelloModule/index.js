import Header from '@/shared/Header';
import styles from './style.module.css';
import { store } from '../../app';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.hello);

  element.appendChild(Header('Hello, world!'));

  const clicker = document.createElement('div');
  clicker.style.fontSize = '26px';
  clicker.style.marginLeft = '20px';
  element.appendChild(clicker);

  const updateValue = () => {
    clicker.innerText = `Clicks: ${store.state.counter.value}`;
  };
  store.subscribe(updateValue);
  updateValue();

  return element;
};
