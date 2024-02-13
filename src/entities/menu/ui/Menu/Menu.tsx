import { Link, } from 'react-router-dom'
import styles from './Menu.module.css'


export const Menu = (): JSX.Element => {
  return (
    <nav className={styles.menu}>
      <Link to="/">Таймер</Link>
      <Link to="/palette">Палитра</Link>
    </nav>
  )
}
