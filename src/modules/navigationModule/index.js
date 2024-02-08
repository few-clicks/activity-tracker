import { Component } from '@/base';
import style from './style.module.css';

const createLink = (text, href) => {
  const link = document.createElement('a');
  link.innerText = text;
  link.href = href;
  link.classList.add(style.link);

  return link;
};

export default () => {
  const navigation = new Component('nav').element;

  navigation.classList.add(style.navigation);

  navigation.appendChild(createLink('Home', '#'));
  navigation.appendChild(createLink('About', '#about'));

  return navigation;
};
