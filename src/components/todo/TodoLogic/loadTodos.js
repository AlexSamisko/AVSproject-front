const loadTodos = async (setIsLoading, setTodos, setError, user) => {
  if (!user) {
    return;
  }
  try {
    const responce = await fetch(
      `https://avsproject-back.onrender.com/todos/${user.user_id}`
    );
    const data = await responce.json();
    setTodos(data);
    console.log(data);
  } catch (error) {
    console.warn(error.message);
    setError(
      "We are very sorry, but we have lost our notes with objectives. Let's us search for it another time"
    );
  } finally {
    setIsLoading(false);
  }
};

export default loadTodos;
