import style from './style.module.css';
import { getCalendarModule, getCanvasModule, getStreakModule } from '@/modules';

export default () => {
  const page = document.createElement('div');
  page.classList.add(style.grid);
  page.appendChild(getStreakModule());
  page.appendChild(getCanvasModule());
  page.appendChild(getCalendarModule());

  return page;
};
