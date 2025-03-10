import { useState } from 'react';
import styles from './SendRestoreCodeForm.module.css';
import sendCodeToRestorePassword from './LoginLogic/sendCodeToRestorePassword';

function SendRestoreCodeForm({
  setToLogin,
  loginValue,
  setLoginValue,
  isLoading,
  setisLoading,
  setwasSent,
}) {
  const [error, setError] = useState(false);
  const goBackHandler = () => {
    setToLogin(false);
  };

  const verificationToRestoreHandler = async (event) => {
    event.preventDefault();

    setisLoading(true);
    sendCodeToRestorePassword(loginValue, setisLoading, setError, setwasSent);
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

      <p>We will send verification code to your mail</p>
      <button
        className={
          isLoading ? `${styles.button} ${styles.loading}` : styles.button
        }
        type="submit"
        disabled={isLoading}
        onClick={(e) => {
          verificationToRestoreHandler(e);
        }}
      >
        {isLoading ? <span className={styles.spinner}></span> : 'Restore'}
      </button>

      <button type="button" onClick={goBackHandler}>
        Back
      </button>
      {error && <p className={styles.popup}>{`${error}`}</p>}
    </form>
  );
}

export default SendRestoreCodeForm;
