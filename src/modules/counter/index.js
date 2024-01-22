import Header from '@/shared/header';
import styles from './style.module.css';
import Button from '@/shared/button';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.hello);

  element.appendChild(Header('Clicker!'));
  element.appendChild(Button('Inc', 'green'));
  element.appendChild(Button('Dec', 'red'));

  return element;
};
