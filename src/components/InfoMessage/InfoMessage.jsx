import styles from './InfoMessage.module.css';

function InfoMessage(props) {
  return (
    props.isOpen && (
      <div className={styles.infoMessage}>
        <span>{props.message}</span>
        <img
          src="https://img.icons8.com/?size=100&id=23537&format=png&color=000000"
          alt=""
          onClick={() => {
            props.onClick();
          }}
        />
      </div>
    )
  );
}

export default InfoMessage;
