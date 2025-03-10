const sendCodeToRestorePassword = async (
  login,
  setisLoading,
  setError,
  setwasSent
) => {
  const message = {
    login: login,
  };

  const responce = await fetch(
    'https://avsproject-back.onrender.com/verifytorestore',
    {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    }
  );
  const data = await responce.json();
  if (data.message) {
    setwasSent(true);
    setisLoading(false);
    console.log(data.message);
  } else if (data.error) {
    setisLoading(false);
    setError(data.error);
    console.log(data.error);
  }
};

export default sendCodeToRestorePassword;
