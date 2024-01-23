import Header from '@/shared/Header';
import Button from '@/shared/Button';
import styles from './style.module.css';
import { store } from '../../app';
import { DECREMENT, INCREMENT } from '../../app/actions';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.hello);

  element.appendChild(Header('Clicker!'));
  element.appendChild(
    Button('Inc', 'green', () => {
      store.dispatch({ type: INCREMENT });
    })
  );
  element.appendChild(
    Button('Dec', 'red', () => {
      store.dispatch({ type: DECREMENT });
    })
  );

  return element;
};
