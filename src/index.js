import './app/styles/normalize.css';
import { makeServiceWorkers } from './app/service';

import {
  getNavigationModule,
  getHelloModule,
  getFormModule,
  getCounterModule,
} from './modules';
import router from './app/router';

window.addEventListener('load', () => {
  makeServiceWorkers();
});

router.initRoutes({
  '/': () => console.log('home'),
  '/about': () => console.log('about'),
  404: () => console.log('not found'),
});

const rootElement = document.getElementById('root');

rootElement.appendChild(getNavigationModule());
rootElement.appendChild(getHelloModule());
rootElement.appendChild(getFormModule());
rootElement.appendChild(getCounterModule());
