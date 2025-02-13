import styles from './InputField.module.css';

function InputField(props) {
  return (
    <>
      <div className={styles.inputField}>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.inputFieldContent}>
          {props.children}          
          <img src="https://img.icons8.com/?size=100&id=2908&format=png&color=737373" alt="" />
        </div>
        
      </div>
    </>
  );
}

export default InputField;
