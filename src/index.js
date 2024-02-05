import './app/styles/normalize.css';
import { makeServiceWorkers } from './app/service';

import {
  getNavigationModule,
  getHelloModule,
  getFormModule,
  getCounterModule,
} from './modules';

const router = async () => {
  const routes = {
    '/': () => console.log('home'),
    '/about': () => console.log('about'),
    404: () => console.log('not found'),
  };

  if (location.hash === '') {
    routes['/']();
    return;
  }

  const route = location.hash.replace('#', '/');
  if (routes[route]) {
    routes[route]();
  } else {
    routes['404']();
  }
};

window.addEventListener('load', () => {
  makeServiceWorkers();
});

//? for url routing
// document.addEventListener('click', (event) => {
//   const { target } = event;
//   if (!target.matches('nav a')) {
//     return;
//   }
//   // event.preventDefault();
//   setTimeout(() => router(), 0);
// });

addEventListener('hashchange', (event) => {
  router();
});

const rootElement = document.getElementById('root');

rootElement.appendChild(getNavigationModule());
rootElement.appendChild(getHelloModule());
rootElement.appendChild(getFormModule());
rootElement.appendChild(getCounterModule());
