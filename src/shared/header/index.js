import './style.scss';

export default (text) => {
  const element = document.createElement('div');
  element.classList.add('header');
  element.innerText = text;

  return element;
};
