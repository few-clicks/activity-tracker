import './normalize.css';
import moduleCreators from '@/modules';
import { makeServiceWorkers } from './app/service';
import navigation from '@/modules/navigation';

window.addEventListener('load', () => {
  makeServiceWorkers();
});

const rootElement = document.getElementById('root');

rootElement.appendChild(navigation.element);

moduleCreators.forEach((createModule) => {
  rootElement.appendChild(createModule());
});
