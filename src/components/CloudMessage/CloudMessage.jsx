import styles from './CloudMessage.module.css'

function CloudMessage(props) {
    return(
        <div className={styles.cloudMessageContainer}>
            {props.children}
            <div className={styles.cloudMessage}>ERRORR</div>
        </div>
    )
}

export default CloudMessage