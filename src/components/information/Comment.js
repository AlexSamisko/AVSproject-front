import styles from './Comment.module.css';
import CommentForm from './CommentForm';
import { useAuth } from '../login/LoginLogic/AuthContext';

function Comment({
  comment,
  deleteComment,
  redactComment,
  handleCommentFormInfo,
}) {
  const { user } = useAuth();
  return (
    <li className={styles.comment}>
      <article>
        <div className={styles.commentWrapper}>
          <p>{comment.comment}</p>
          <time>{comment.time}</time>
        </div>
        <div className={styles.buttonWrapper}>
          {user && user.user_id === comment.user_id && (
            <button
              onClick={() => {
                deleteComment(comment);
              }}
            >
              Delete
            </button>
          )}
          {user && user.user_id === comment.user_id && (
            <button
              onClick={() => {
                handleCommentFormInfo(
                  <CommentForm
                    initialText={comment.comment}
                    handleCommentFormInfo={handleCommentFormInfo}
                    comment={comment}
                    redactComment={redactComment}
                  />
                );
              }}
            >
              Redact
            </button>
          )}
        </div>
      </article>
    </li>
  );
}

export default Comment;
