import { useState } from 'react';
import MyInfo from './MyInfo';
import Comments from './Comments';
import styles from './Information.module.css';

function Information({ socket, isLogged }) {
  const [forCommentForm, setForCommentForm] = useState(false);

  const handleCommentFormInfo = (info) => {
    setForCommentForm(info);
  };

  return (
    <div className={styles.information}>
      <MyInfo />
      {forCommentForm ? (
        forCommentForm
      ) : (
        <Comments
          handleCommentFormInfo={handleCommentFormInfo}
          socket={socket}
          isLogged={isLogged}
        />
      )}
    </div>
  );
}

export default Information;
