import styles from './Input.module.css'

function Input(props) {
    return (
        <input className={styles.input} type={props.type} placeholder={props.placeholder} value={props.inputValue} onChange={(e) => {            
            if(e.target.value.length <= props.maxLength) {
                props.onChange(e.target.value)
            }
            else if(e.target.value.length > props.maxLength) {
                console.log("Too much symbols")
            }            
        }}
        onKeyDown={(e) => {
            if(props.enterKey) {
                props.enterKey(e)
            }       
                
        }}></input>
    )
}

export default Input
