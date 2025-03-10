import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, error, deleteTodo, completeTodo }) {
  return (
    <div className={styles.list}>
      <ul>
        {error ? (
          <h4>{error}</h4>
        ) : todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.todo_id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          ))
        ) : (
          'Here are not any objectives yet'
        )}
      </ul>
    </div>
  );
}

export default TodoList;
