const redactCommentHandler = async (item, socket) => {
  const redactComment = {
    action: 'redact comment',
    comment: item.comment,
    time: item.time,
    comment_id: item.comment_id,
    user_id: item.user_id,
  };

  socket.send(JSON.stringify(redactComment));
};

export default redactCommentHandler;
