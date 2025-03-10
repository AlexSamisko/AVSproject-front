import { v4 as uuid } from 'uuid';

const addTodoHandler = async (text, setIsLoading, setTodos, setError, user) => {
  const newObjective = {
    todo: text,
    isComplete: 0,
    todo_id: uuid(),
    user_id: user.user_id,
  };

  try {
    setIsLoading(true);
    const responce = await fetch(
      'https://avsproject-back.onrender.com/post/todo',
      {
        method: 'POST',
        body: JSON.stringify(newObjective),
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

export default addTodoHandler;
