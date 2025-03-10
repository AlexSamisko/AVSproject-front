import { useState } from 'react';
import SetNewPasswordForm from './SetNewPasswordForm';
import SimpleLoginForm from './SimpleLoginForm';
import SendRestoreCodeForm from './SendRestoreCodeForm';

function LoginForm({ setToLogin }) {
  const [isForgotten, setisForgotten] = useState(false);
  const [wasSent, setwasSent] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      {!isForgotten && (
        <SimpleLoginForm
          setToLogin={setToLogin}
          loginValue={loginValue}
          setLoginValue={setLoginValue}
          setisForgotten={setisForgotten}
        />
      )}

      {isForgotten && !wasSent && (
        <SendRestoreCodeForm
          setToLogin={setToLogin}
          loginValue={loginValue}
          setLoginValue={setLoginValue}
          isLoading={isLoading}
          setisLoading={setisLoading}
          setwasSent={setwasSent}
        />
      )}

      {isForgotten && wasSent && (
        <SetNewPasswordForm
          setToLogin={setToLogin}
          loginValue={loginValue}
          setLoginValue={setLoginValue}
        />
      )}
    </>
  );
}

export default LoginForm;
