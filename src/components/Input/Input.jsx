import styles from './Input.module.css'

function Input(props) {
    return (
        <input className={styles.input} type={props.type} placeholder={props.placeholder} value={props.inputValue} onChange={(e) => {
            props.onChange(e.target.value)
        }}></input>
    )
}

export default Input
