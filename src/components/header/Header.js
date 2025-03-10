import Login from '../login/Login';
import styles from './Header.module.css';
import Weather from '../weather/Weather';

function Header() {
  return (
    <header className={styles.header}>
      <Weather />
      <h1>Welcome</h1>
      <Login />
    </header>
  );
}

export default Header;
