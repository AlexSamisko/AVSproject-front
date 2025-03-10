const deleteAllTodosHandler = async (
  setIsLoading,
  setTodos,
  setError,
  user
) => {
  try {
    setIsLoading(true);
    const responce = await fetch(
      'https://avsproject-back.onrender.com/post/delete/all',
      {
        method: 'POST',
        body: JSON.stringify({ user_id: user.user_id }),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }
    );
    const updatedTodos = await responce.json();
    console.log(updatedTodos);
    setTodos(updatedTodos);
  } catch (err) {
    setError(
      "We are very sorry, but we have lost our notes with objectives. Let's us search for it another time"
    );
  } finally {
    setIsLoading(false);
  }
};

export default deleteAllTodosHandler;
