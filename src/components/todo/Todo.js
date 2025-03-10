import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, completeTodo }) {
  return (
    <li className={styles.todo}>
      <p className={todo.isComplete ? styles.isComplete : styles.isNotComplete}>
        {todo.todo}
      </p>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.btnMarkAsComplete}
          onClick={() => completeTodo(todo.todo_id, todo.isComplete)}
        >
          Complete
        </button>
        <button
          className={styles.btnDelete}
          onClick={() => deleteTodo(todo.todo_id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
