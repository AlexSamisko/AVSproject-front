const deleteTodoHandler = async (
  id,
  setIsLoading,
  setTodos,
  setError,
  user
) => {
  console.log(id);
  try {
    setIsLoading(true);
    const responce = await fetch(
      'https://avsproject-back.onrender.com/patch/deletetodo',
      {
        method: 'PATCH',
        body: JSON.stringify({
          todo_id: id,
          user_id: user.user_id,
        }),
        headers: { 'Content-Type': 'application/json' },
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

export default deleteTodoHandler;
