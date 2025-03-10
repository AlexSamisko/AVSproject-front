import { useState } from 'react';
import LoginWindow from './LoginWindow';
import SignUpForm from './SignUpForm';
import { useAuth } from './LoginLogic/AuthContext';
import logout from './LoginLogic/logout';
import styles from './Login.module.css';

function Login() {
  const [toLogin, setToLogin] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);
  const { user, setUser, setIsAuthenticated } = useAuth();

  const logOutHandler = async () => {
    logout(setUser, setIsAuthenticated);
  };

  if (toLogin) {
    return <LoginWindow setToLogin={setToLogin} />;
  }

  if (toSignUp) {
    return <SignUpForm setToSignUp={setToSignUp} />;
  }

  if (user) {
    return (
      <button type="button" onClick={logOutHandler}>
        LogOut
      </button>
    );
  }

  return (
    <div className={styles.login}>
      <button onClick={() => setToLogin(true)}>LogIn</button>
      <button onClick={() => setToSignUp(true)}>SignUp</button>
    </div>
  );
}

export default Login;
