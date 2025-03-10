import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './CommentForm.module.css';

function CommentForm({
  initialText = '',
  comment,
  addComment,
  handleCommentFormInfo,
  redactComment,
  toAdd = false,
}) {
  const [text, setText] = useState(initialText);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (toAdd) {
      addComment(text);
    } else {
      comment.comment = text;
      redactComment(comment);
    }

    setText('');
    handleCommentFormInfo(false);
  };

  return (
    <form className={styles.commentWindow} onSubmit={onSubmitHandler}>
      <TextareaAutosize
        className={styles.text}
        minRows={10}
        placeholder="Write new comment"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className={styles.btn} type="submit">
        {toAdd ? 'Add comment' : 'Ok'}
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          handleCommentFormInfo(false);
        }}
      >
        Back
      </button>
    </form>
  );
}

export default CommentForm;
