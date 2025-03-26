import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import EventItem from './EventItem/EventItem';
import styles from './Events.module.css'

function Events() {
  const EventList = [
    {qwe:"qwe"}, {qwe:"qwe"},{qwe:"qwe"}
  ]
  return (
    <>
      <HeaderTitle>Events</HeaderTitle>  
      <div className={styles.eventsContainer}>
        {EventList &&
          <>
            <EventItem eventName="123" startTime="111" entTime="333" creator="Eresse" eventId={1}></EventItem>
            <EventItem eventName="123" startTime="111" entTime="333" creator="Eresse"></EventItem>
            <EventItem eventName="123" startTime="111" entTime="333" creator="Eresse"></EventItem>
            <EventItem eventName="123" startTime="111" entTime="333" creator="Eresse"></EventItem>
            <EventItem eventName="123" startTime="111" entTime="333" creator="Eresse"></EventItem>
            <EventItem eventName="123" startTime="111" entTime="333" creator="Eresse"></EventItem>
          </>
        }
        
      </div>
    </>
  );
}
export default Events;
