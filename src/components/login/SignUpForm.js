import { useState } from 'react';
import { useAuth } from './LoginLogic/AuthContext';
import { v4 as uuid } from 'uuid';
import styles from './SignUpForm.module.css';

function SignUpForm({ setToSignUp }) {
  const [wasApply, setWasApply] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [codeValue, setCodeValue] = useState('');
  const [firstPasswordValue, setFirstPasswordValue] = useState('');
  const [secondPasswordValue, setSecondPasswordValue] = useState('');
  const [error, setError] = useState(false);
  const { setUser } = useAuth();

  const goBackHandler = async () => {
    const message = {
      login: loginValue,
    };
    const responce = await fetch(
      'https://avsproject-back.onrender.com/clearpresignup',
      {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }
    );
    const data = await responce.json();
    console.log(data);
    setToSignUp(false);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(false);

    if (!wasApply) {
      setisLoading(true);
      const message = {
        login: loginValue,
      };

      const responce = await fetch(
        'https://avsproject-back.onrender.com/presignup',
        {
          method: 'POST',
          body: JSON.stringify(message),
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        }
      );
      const data = await responce.json();
      if (data.message) {
        setisLoading(false);
        console.log(data.message);
        setWasApply(true);
      } else if (data.error) {
        setisLoading(false);
        setError(data.error);
        console.log(data.error);
      }
    } else {
      if (secondPasswordValue !== firstPasswordValue) {
        setError('Passwords must be same');
        return;
      }
      const message = {
        login: loginValue,
        password: secondPasswordValue,
        code: codeValue,
        nickname: '',
        user_id: uuid(),
      };

      const responce = await fetch(
        'https://avsproject-back.onrender.com/signup',
        {
          method: 'POST',
          body: JSON.stringify(message),
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        }
      );
      const data = await responce.json();
      if (data.user_id) {
        localStorage.setItem('token', data.token);
        setUser(data);
        setLoginValue('');
        setFirstPasswordValue('');
        setSecondPasswordValue('');
        setCodeValue('');
        setToSignUp(false);
      } else if (data.error) {
        setError(data.error);
        setCodeValue('');
        console.log(data.error);
      }
    }
  };

  return (
    <form className={styles.signupform} onSubmit={onSubmitHandler}>
      <input
        type="email"
        value={loginValue}
        placeholder="Enter your email"
        name="login"
        onChange={(e) => {
          setLoginValue(e.target.value);
        }}
      ></input>

      {!wasApply && (
        <>
          <button
            className={
              isLoading ? `${styles.button} ${styles.loading}` : styles.button
            }
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <span className={styles.spinner}></span> : 'Apply'}
          </button>
          <button type="button" onClick={goBackHandler}>
            Back
          </button>
        </>
      )}

      {wasApply && (
        <>
          <input
            type="password"
            value={firstPasswordValue}
            name="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setFirstPasswordValue(e.target.value);
            }}
          ></input>
          <input
            type="password"
            value={secondPasswordValue}
            name="password"
            placeholder="Repeat your password"
            onChange={(e) => {
              setSecondPasswordValue(e.target.value);
            }}
          ></input>
          <input
            type="password"
            value={codeValue}
            name="code"
            placeholder="Enter verification code"
            onChange={(e) => {
              setCodeValue(e.target.value);
            }}
          ></input>

          <button type="submit">SignUp</button>
          <button type="button" onClick={goBackHandler}>
            Back
          </button>
        </>
      )}
      {error && <p className={styles.popup}>{`${error}`}</p>}
    </form>
  );
}

export default SignUpForm;
