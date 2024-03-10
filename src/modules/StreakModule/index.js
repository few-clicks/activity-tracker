import style from './style.module.css';

export default () => {
  const root = document.createElement('div');
  root.classList.add(style.root);

  const container = document.createElement('div');
  container.classList.add(style.container);

  root.appendChild(container);
  return root;
};
