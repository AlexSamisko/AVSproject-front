const gainToken = async (
  login,
  password,
  setIsAuthenticated,
  setError,
  setLogin
) => {
  const message = {
    login: login,
    password: password,
  };
  try {
    const responce = await fetch('https://avsproject-back.onrender.com/token', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    const data = await responce.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      setLogin(false);
    } else if (data.error) {
      setError(data.error);
      throw new Error(data.error);
    }
  } catch (error) {
    console.warn(error);
  }
};

export default gainToken;
