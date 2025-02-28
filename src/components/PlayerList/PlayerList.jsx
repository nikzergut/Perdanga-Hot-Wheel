import styles from './PlayerList.module.css'

function PlayerList(props) {
    return(
        <div className={styles.playerList}>
            {props.children}
        </div>
    )
}

export default PlayerList