import { store } from './app';
import './normalize.css';
import moduleCreators from '@/modules';

console.log(store);

const rootElement = document.getElementById('root');

moduleCreators.forEach((createModule) => {
  rootElement.appendChild(createModule());
});
