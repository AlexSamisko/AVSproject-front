import { useAuth } from './LoginLogic/AuthContext';
import { useState } from 'react';
import gainToken from './LoginLogic/gainToken';
import styles from './SimpleLoginForm.module.css';

function SimpleLoginForm({
  setToLogin,
  loginValue,
  setLoginValue,
  setisForgotten,
}) {
  const { setIsAuthenticated } = useAuth();
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState(false);

  const goBackHandler = () => {
    setToLogin(false);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    gainToken(
      loginValue,
      passwordValue,
      setIsAuthenticated,
      setError,
      setToLogin
    );
    setLoginValue('');
    setPasswordValue('');
  };

  return (
    <form className={styles.loginform}>
      <input
        type="text"
        value={loginValue}
        placeholder="Enter your mail"
        onChange={(e) => {
          setLoginValue(e.target.value);
        }}
      ></input>

      <input
        type="password"
        value={passwordValue}
        placeholder="Enter your password"
        onChange={(e) => {
          setPasswordValue(e.target.value);
        }}
      ></input>

      <button
        className={styles.forgotPassword}
        onClick={(e) => {
          e.preventDefault();
          setisForgotten(true);
        }}
      >
        Forgot password?
      </button>
      <button
        type="submit"
        onClick={(e) => {
          loginHandler(e);
        }}
      >
        Login
      </button>

      <button type="button" onClick={goBackHandler}>
        Back
      </button>
      {error && <p className={styles.popup}>{`${error}`}</p>}
    </form>
  );
}

export default SimpleLoginForm;
