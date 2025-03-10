const logout = (setUser, setIsAuthenticated) => {
  localStorage.removeItem('token');
  setIsAuthenticated(false);
  setUser(null);
};

export default logout;
