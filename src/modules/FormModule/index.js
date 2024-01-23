import Header from '@/shared/Header';
import styles from './style.module.css';
import Input from './components/Input';
import { store } from '../../app';
import { SET_TEXT } from '../../app/actions';

export default () => {
  const element = document.createElement('div');
  element.classList.add(styles.form);

  element.appendChild(Header('Input name'));

  const inputElement = Input();
  inputElement.value = store.getState().input.text;
  inputElement.oninput = (event) => {
    inputElement.value = event.target.value;
    store.dispatch({ type: SET_TEXT, payload: { text: event.target.value } });
  };
  element.appendChild(inputElement);

  return element;
};
