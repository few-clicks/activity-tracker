import Header from '@/shared/Header';
import styles from './style.module.css';
import { store } from '../../app';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.hello);

  const headerElement = Header();
  element.appendChild(headerElement);
  const updateName = () => {
    headerElement.innerText = `Hello, ${store.getState().input.text}!`;
  };
  store.subscribe(updateName);
  updateName();

  const clicker = document.createElement('div');
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
