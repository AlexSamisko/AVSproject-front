import Service from './Service';
import styles from './ListOfServices.module.css';

function ListOFServices({ showServicesHandler }) {
  return (
    <div className={styles.services}>
      <ul className={styles.list}>
        <Service text="Create a web page" />
        <Service text="Develop an electrical plan" />
        <Service text="Play a board game with you" />
      </ul>
      <button
        onClick={() => {
          showServicesHandler();
        }}
      >
        Hide
      </button>
    </div>
  );
}

export default ListOFServices;
