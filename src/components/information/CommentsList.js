import Comment from './Comment';
import { useAuth } from '../login/LoginLogic/AuthContext';
import styles from './CommentsList.module.css';

function CommentList({ deleteComment, redactComment, handleCommentFormInfo }) {
  const { comments } = useAuth();
  return (
    <ul className={styles.list}>
      {comments.length ? (
        comments.map((item) => (
          <Comment
            comment={item}
            key={item.comment_id}
            deleteComment={deleteComment}
            redactComment={redactComment}
            handleCommentFormInfo={handleCommentFormInfo}
          />
        ))
      ) : (
        <p>Here is no comments yet</p>
      )}
    </ul>
  );
}

export default CommentList;
