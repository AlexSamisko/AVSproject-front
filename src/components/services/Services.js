import ListOfServices from './ListOfServices';
import styles from './Services.module.css';
import { useState } from 'react';

function Services() {
  const [isActive, setisActive] = useState(false);

  const showServicesHandler = () => {
    setisActive(!isActive);
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.hidden : ''}`}>
      {!isActive ? (
        <button
          className={styles.btn}
          onClick={() => {
            setisActive(!isActive);
          }}
        >
          <h4>There are some services</h4>
        </button>
      ) : (
        <ListOfServices showServicesHandler={showServicesHandler} />
      )}
    </div>
  );
}

export default Services;
