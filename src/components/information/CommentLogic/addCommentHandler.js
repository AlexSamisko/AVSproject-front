import { v4 as uuid } from 'uuid';
import moment from 'moment';

const addCommentHandler = async (comment, socket, user) => {
  const newComment = {
    action: 'add comment',
    user_id: user.user_id,
    comment,
    time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    comment_id: uuid(),
  };

  socket.send(JSON.stringify(newComment));
};

export default addCommentHandler;
