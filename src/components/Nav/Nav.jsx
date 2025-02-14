import styles from './Nav.module.css';
import { Link } from 'react-router';
function Nav() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/roulette">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
