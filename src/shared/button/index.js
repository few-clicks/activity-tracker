import './style.css';

export default (text, color) => {
  const element = document.createElement('button');
  element.classList.add('button');
  element.innerText = text;
  element.style.backgroundColor = color;

  return element;
};
