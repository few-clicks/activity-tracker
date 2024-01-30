import './normalize.css';
import moduleCreators from '@/modules';
import { makeServiceWorkers } from './service';

window.addEventListener('load', () => {
  makeServiceWorkers();
});

const rootElement = document.getElementById('root');

moduleCreators.forEach((createModule) => {
  rootElement.appendChild(createModule());
});
