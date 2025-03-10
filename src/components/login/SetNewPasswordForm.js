import { useState } from 'react';
import styles from './SetNewPasswordForm.module.css';
import registrateNewPassword from './LoginLogic/registrateNewPassword';
import { useAuth } from './LoginLogic/AuthContext';

function SetNewPasswordForm({ setToLogin, loginValue, setLoginValue }) {
  const [firstNewPasswordValue, setFirstNewPasswordValue] = useState('');
  const [secondNewPasswordValue, setSecondNewPasswordValue] = useState('');
  const [verificationCodeValue, setVerificationCodeValue] = useState('');
  const [error, setError] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const goBackHandler = () => {
    setToLogin(false);
  };

  const registrationNewPasswordHandler = async (event) => {
    event.preventDefault();
    if (firstNewPasswordValue !== secondNewPasswordValue) {
      setError('Passwords must be same');
      return;
    }

    registrateNewPassword(
      loginValue,
      secondNewPasswordValue,
      verificationCodeValue,
      setIsAuthenticated,
      setToLogin,
      setError
    );
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
        value={firstNewPasswordValue}
        placeholder="Enter new password"
        onChange={(e) => {
          setFirstNewPasswordValue(e.target.value);
        }}
      ></input>
      <input
        type="password"
        value={secondNewPasswordValue}
        placeholder="Repeat new password"
        onChange={(e) => {
          setSecondNewPasswordValue(e.target.value);
        }}
      ></input>
      <input
        type="password"
        value={verificationCodeValue}
        placeholder="Enter verification code"
        onChange={(e) => {
          setVerificationCodeValue(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          registrationNewPasswordHandler(e);
        }}
      >
        Submit&LogIn
      </button>

      <button type="button" onClick={goBackHandler}>
        Back
      </button>
      {error && <p className={styles.popup}>{`${error}`}</p>}
    </form>
  );
}

export default SetNewPasswordForm;
