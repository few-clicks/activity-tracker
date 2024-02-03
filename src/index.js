import './styles/normalize.css';
import { makeServiceWorkers } from './app/service';

import {
  getNavigationModule,
  getHelloModule,
  getFormModule,
  getCounterModule,
} from './modules';

window.addEventListener('load', () => {
  makeServiceWorkers();
});

const rootElement = document.getElementById('root');

rootElement.appendChild(getNavigationModule());
rootElement.appendChild(getHelloModule());
rootElement.appendChild(getFormModule());
rootElement.appendChild(getCounterModule());
