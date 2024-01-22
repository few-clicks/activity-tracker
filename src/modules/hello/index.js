import Header from '@/shared/header';
import styles from './style.module.css';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.hello);

  element.appendChild(Header('Hello, world!'));

  return element;
};
