import './normalize.css';
import moduleCreators from '@/modules';

const PUBLIC_SW_PATH = './serviceWorker.js';

window.addEventListener('load', async () => {
  if (navigator.serviceWorker) {
    try {
      const response = await navigator.serviceWorker.register(PUBLIC_SW_PATH);
      console.log('SW register success', response);
    } catch (error) {
      console.error('SW register failed:', error);
    }
  }
});

const rootElement = document.getElementById('root');

moduleCreators.forEach((createModule) => {
  rootElement.appendChild(createModule());
});
