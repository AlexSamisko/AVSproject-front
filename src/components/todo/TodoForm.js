import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [objective, SetObjective] = useState('');
  const [isHovered, setIsHovered] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(objective);
    SetObjective('');
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.todoForm}>
      <input
        className={styles.input}
        placeholder="Text next service request"
        value={objective}
        onChange={(e) => {
          SetObjective(e.target.value);
        }}
      ></input>
      <button
        className={styles.btn}
        type="submit"
        disabled={!objective}
        onMouseOver={() => {
          !objective && setIsHovered(false);
        }}
        onMouseLeave={() => setIsHovered(true)}
      >
        {!isHovered && (
          <p className={styles.popup}>The field must not be empty.</p>
        )}
        Add service request
      </button>
    </form>
  );
}

export default TodoForm;
