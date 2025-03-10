// import { useState } from 'react';
import { useAuth } from '../login/LoginLogic/AuthContext';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import styles from './Comments.module.css';
import addCommentHandler from './CommentLogic/addCommentHandler';
import deleteCommentHandler from './CommentLogic/deleteCommentHandler';
import redactCommentHandler from './CommentLogic/redactCommentHandler';

function Comments({ handleCommentFormInfo }) {
  const { user, socket } = useAuth();

  const addComment = (comment) => {
    addCommentHandler(comment, socket, user);
  };

  const deleteComment = (comment) => {
    deleteCommentHandler(comment, socket);
  };

  const redactComment = (comment) => {
    redactCommentHandler(comment, socket);
  };

  return (
    <div className={styles.comments}>
      <CommentsList
        handleCommentFormInfo={handleCommentFormInfo}
        deleteComment={deleteComment}
        redactComment={redactComment}
      />
      {!!user ? (
        <AddComment
          addComment={addComment}
          handleCommentFormInfo={handleCommentFormInfo}
        />
      ) : (
        <h3>Please log in to leave a comment.</h3>
      )}
    </div>
  );
}

export default Comments;
