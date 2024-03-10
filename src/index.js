/**
 * Root index
 *
 * - imports
 * - reset styles
 * - connect service worker
 * - connect the root element
 * - add routing and pages
 */

import './app/styles/normalize.css';
import style from './style.module.css';
import { makeServiceWorkers } from './app/service';
import { getHomePage } from './pages';
import router from './app/router';

window.addEventListener('load', () => {
  makeServiceWorkers();
});

const rootElement = document.getElementById('root');
rootElement.classList.add(style.container);

const pageContainer = document.createElement('div');

router.initPageContainer(pageContainer);
router.initRoutes({
  '/': getHomePage(),
});

rootElement.appendChild(pageContainer);
