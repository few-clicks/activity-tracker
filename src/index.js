import './style.css';
import styles from './style.module.scss';

import '@/scripts/script';

console.log('Hello, world', styles.test);

const el = document.getElementById('test');
el.classList.add('from_style');
