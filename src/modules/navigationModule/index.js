import { Component } from '@/base';

export default () => {
  const element = new Component('div').element;

  element.style.height = '30px';
  element.style.backgroundColor = 'red';

  return element;
};
