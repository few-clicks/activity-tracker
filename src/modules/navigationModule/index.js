import { Element } from '@/base';

export default () => {
  const element = new Element('div').element;

  element.style.height = '30px';
  element.style.backgroundColor = 'red';

  return element;
};
