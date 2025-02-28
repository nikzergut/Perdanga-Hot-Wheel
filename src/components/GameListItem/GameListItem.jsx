import styles from './GameListItem.module.css'

function GameListItem(props) {
  return (
    <li className={styles.gameListItem}>
        <span>{props.gameName}</span>
        <img src="https://img.icons8.com/?size=100&id=23537&format=png&color=000000" alt="closeCross" onClick={() => {
            props.onClick(props.gameName)
        }}/>
    </li>
  );
}

export default GameListItem;
