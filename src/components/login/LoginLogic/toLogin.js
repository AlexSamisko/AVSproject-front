const toLogin = async (token, setUser, setIsAuthenticated) => {
  try {
    const responce = await fetch('https://avsproject-back.onrender.com/login', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await responce.json();
    if (data.user_id) {
      setUser(data);
      setIsAuthenticated(false);
    } else if (data.error) {
      throw new Error(data.error);
    }
  } catch (error) {
    console.log(error);
    localStorage.removeItem('token');
  }
};

export default toLogin;
