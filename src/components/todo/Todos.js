import { useEffect, useState } from 'react';
import { useAuth } from '../login/LoginLogic/AuthContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosActions from './TodosActions';
import styles from './Todos.module.css';
import addTodoHandler from './TodoLogic/addTodoHandler';
import deleteTodoHandler from './TodoLogic/deleteTodoHandler';
import completeTodoHandler from './TodoLogic/completeTodoHandler';
import deleteAllTodosHandler from './TodoLogic/deleteAllTodosHandler';
import deleteCompletedTodosHandler from './TodoLogic/deleteCompletedTodosHandler';
import loadTodos from './TodoLogic/loadTodos';

function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTodos(setIsLoading, setTodos, setError, user);
  }, [user]);

  const addTodo = async (text) => {
    addTodoHandler(text, setIsLoading, setTodos, setError, user);
  };

  const deleteTodo = async (id) => {
    deleteTodoHandler(id, setIsLoading, setTodos, setError, user);
  };

  const completeTodo = async (id, isComplete) => {
    completeTodoHandler(id, setIsLoading, setTodos, setError, isComplete, user);
  };

  const deleteAllTodos = async () => {
    deleteAllTodosHandler(setIsLoading, setTodos, setError, user);
  };

  const deleteCompletedTodos = async () => {
    deleteCompletedTodosHandler(setIsLoading, setTodos, setError, user);
  };

  if (!user) {
    return <h2>Please log in to use Todos module</h2>;
  }

  return (
    <div className={styles.todos}>
      {isLoading && <p> Wait a second we are checking for objectives</p>}
      <TodoForm addTodo={addTodo} />
      {!!todos.length && (
        <TodosActions
          todos={todos}
          deleteAllTodos={deleteAllTodos}
          deleteCompletedTodos={deleteCompletedTodos}
        />
      )}
      <TodoList
        todos={todos}
        error={error}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default Todos;
