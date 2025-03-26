import styles from './HeaderTitle.module.css'

function HeaderTitle(props) {
    return(
        <h1 className={styles.headerTitle}>{props.children}</h1>
    )
}

export default HeaderTitle