import Header from '@/shared/Header';
import styles from './style.module.css';
import Input from './components/Input';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.form);

  element.appendChild(Header('Input name'));
  element.appendChild(Input());

  return element;
};
