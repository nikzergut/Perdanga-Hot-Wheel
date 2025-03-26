import styles from './Footer.module.css';

function Footer(props) {
  return <footer className={styles.footer}>{props.children}</footer>;
}

export default Footer;
