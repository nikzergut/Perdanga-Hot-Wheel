import styles from './Content.module.css';

function Content(props) {
  return <main className={styles.content}>{props.children}</main>;
}

export default Content;
