import style from './TodosActions.module.css';

function TodosActions({ todos, deleteAllTodos, deleteCompletedTodos }) {
  const CompleteTodos = todos.filter((todo) => todo.isComplete === 1);

  return (
    <div className={style.actions}>
      <button onClick={() => deleteAllTodos()}>Delete All</button>
      <button
        disabled={!CompleteTodos.length}
        onClick={() => deleteCompletedTodos()}
      >
        Delete Completed
      </button>
    </div>
  );
}

export default TodosActions;
