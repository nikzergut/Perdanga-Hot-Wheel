import styles from './EventItem.module.css';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router';
function EventItem(props) {  
  return (
    <div className={styles.eventItem}>
      <div className={styles.eventItemRow}>
        <span>{props.eventName}</span>
      </div>
      <div className={styles.eventItemRow}>
        <span>
          {props.startTime}-{props.endTime}
        </span>
      </div>
      <div className={styles.eventItemRow}>
        <span>Creator: </span>
        <span>{props.creator}</span>
      </div>
      <div className={styles.eventItemRow} data-variant='two-row'>
        <div>
          <span>Members </span>
          <span>9/16</span>
        </div>
        
        <Link to={"/events/" + props.eventId}>
          <Button>Войти</Button>
        </Link>
      </div>
    </div>
  );
}
export default EventItem;
