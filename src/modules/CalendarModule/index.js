import style from './style.module.css';

export default () => {
  const root = document.createElement('div');
  root.classList.add(style.root);

  return root;
};
