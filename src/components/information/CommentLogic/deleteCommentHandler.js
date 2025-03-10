const deleteCommentHandler = async (comment, socket) => {
  const deleteComment = {
    action: 'delete comment',
    ...comment,
  };

  socket.send(JSON.stringify(deleteComment));
};

export default deleteCommentHandler;
