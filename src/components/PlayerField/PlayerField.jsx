import styles from './PlayerField.module.css'

function PlayerField(props) {
    return(
        <div className={styles.playerField}>
            <img src={props.steamAvatarSource} alt="steamAvatar" />
            <span>{props.steamNick}</span>
        </div>
    )
}

export default PlayerField