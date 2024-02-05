import { Component } from '@/base';

const createLink = (text, href) => {
  const link = document.createElement('a');
  link.innerText = text;
  link.href = href;

  return link;
};

export default () => {
  const element = new Component('div').element;
  element.style.height = '30px';
  element.style.backgroundColor = 'red';

  const navigation = new Component('nav').element;
  navigation.style.display = 'flex';
  navigation.style.gap = '10px';

  navigation.appendChild(createLink('Home', '#'));
  navigation.appendChild(createLink('About', '#about'));

  element.appendChild(navigation);

  return element;
};
