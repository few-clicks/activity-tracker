import Header from '@/common/Header';
import Button from '@/common/Button';
import styles from './style.module.css';
import { store } from '@/app/data';
import { DECREMENT, INCREMENT } from '@/app/data/actions';

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
