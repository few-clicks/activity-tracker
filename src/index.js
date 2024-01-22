import './normalize.css';
import moduleCreators from '@/modules';

const rootElement = document.getElementById('root');

moduleCreators.forEach((createModule) => {
  rootElement.appendChild(createModule());
});
