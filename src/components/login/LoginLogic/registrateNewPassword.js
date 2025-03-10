const registrateNewPassword = async (
  login,
  password,
  code,
  setIsAuthenticated,
  setToLogin,
  setError
) => {
  const message = {
    login: login,
    password: password,
    code: code,
  };

  try {
    const responce = await fetch(
      'https://avsproject-back.onrender.com/restoreandlogin',
      {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }
    );
    const data = await responce.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      setToLogin(false);
    } else if (data.error) {
      setError(data.error);
      throw new Error(data.error);
    }
  } catch (error) {
    console.warn(error);
  }
};

export default registrateNewPassword;
