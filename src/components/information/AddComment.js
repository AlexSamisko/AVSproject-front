import styles from './AddComment.module.css';
import CommentForm from './CommentForm';

function AddComment({ addComment, handleCommentFormInfo }) {
  return (
    <div className={styles.addComment}>
      <button
        onClick={(e) => {
          e.preventDefault();

          handleCommentFormInfo(
            <CommentForm
              addComment={addComment}
              handleCommentFormInfo={handleCommentFormInfo}
              toAdd={true}
            />
          );
        }}
      >
        Add comment
      </button>
    </div>
  );
}

export default AddComment;
