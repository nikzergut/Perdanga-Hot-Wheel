import styles from './InfoMessage.module.css';

function InfoMessage(props) {
  return (
    props.isOpen && (
      <div className={styles.infoMessage}>
        <span>{props.message}</span>
        <img
          src="https://www.svgrepo.com/show/178323/cross-close.svg"
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
