import './style.css';

export default (text, color, onClick) => {
  const element = document.createElement('button');
  element.classList.add('button');
  element.innerText = text;
  element.onclick = onClick;
  element.style.backgroundColor = color;

  return element;
};
