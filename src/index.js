import './style.css';
import styles from './style.module.scss';

console.log('Hello, world', styles.test);

const el = document.getElementById('test');
el.classList.add('from_style');
