import Header from '@/shared/Header';
import Button from '@/shared/Button';
import styles from './style.module.css';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.hello);

  element.appendChild(Header('Clicker!'));
  element.appendChild(Button('Inc', 'green'));
  element.appendChild(Button('Dec', 'red'));

  return element;
};
