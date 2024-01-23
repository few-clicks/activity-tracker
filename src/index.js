import { store } from './app';
import { DECREMENT, INCREMENT, SET_TEXT } from './app/actions';
import './normalize.css';
import moduleCreators from '@/modules';

console.log(store);

const unsubscribe = store.subscribe(() => {
  console.log('Состояние обновлено:', store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: SET_TEXT, payload: { text: 'hello' } });

unsubscribe();
store.dispatch({ type: INCREMENT });

const rootElement = document.getElementById('root');

moduleCreators.forEach((createModule) => {
  rootElement.appendChild(createModule());
});
