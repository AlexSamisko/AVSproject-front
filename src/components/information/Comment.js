import styles from './Comment.module.css';
import CommentForm from './CommentForm';
import { useAuth } from '../login/LoginLogic/AuthContext';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

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
              <MdDeleteOutline className={styles.icon} />
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
              <FaRegEdit className={styles.icon} />
            </button>
          )}
        </div>
      </article>
    </li>
  );
}

export default Comment;
