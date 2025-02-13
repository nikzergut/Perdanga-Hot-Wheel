import styles from './DatePicker.module.css';

function Datepicker(props) {
  return (
    <div className={styles.datepickerContainer}>      
      <input
        type="datetime-local"
        min={props.minTime}
        className={styles.datepicker}
        value={props.currentTime ? props.currentTime.format('YYYY-MM-DDTHH:mm') : ''}
        onChange={e => {
          props.func(e, props.currentTime);
        }}
      />
    </div>
  );
}

export default Datepicker;
