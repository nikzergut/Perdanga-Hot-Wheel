import React, { useRef, useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input'
import Selector from '../../components/Selector/Selector';
import Template from '../../components/Template/Template';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import styles from './EventCreation.module.css';
import Datepicker from '../../components/DatePicker/DatePicker';
import InfoMessage from '../../components/InfoMessage/InfoMessage';
import Button from '../../components/Button/Button';
import dayjs from 'dayjs';


const rules = [
  {
    value: 5351,
    label: 'Johny',
  },
  {
    value: 412,
    label: 'Abba',
  },
  {
    value: 53461,
    label: 'Gioga',
  },
  {
    value: 54326,
    label: 'Zetnik',
  },
];

function EventCreation() {
  // Event Name
  const [eventName, setEventName] = useState("")
  // Game Count
  const [gameCounter, setGameCount] = useState("")
  // Datepicker
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(null);
  const [currentTime] = useState(dayjs());
  // Info Message
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState("")

  function onStartTimeChange(e) {
    const value = dayjs(e.target.value);
    setStartTime(value);
    if (endTime && value.valueOf() > endTime.valueOf()) {
      setEndTime(null);
    }
  }

  function onEndTimeChange(e) {
    setEndTime(dayjs(e.target.value));
  }
  
  function closeMessage() {
    setIsOpen((prev) => {
      return !prev
    })
  }

  function createPopup() {
    setText("Данные отправлены в министерство")
    setIsOpen(true)
    setTimeout(()=> {setIsOpen(false)}, 2000)
  }

  // function changeInputValue(e) {
  //   setEventName(e.target.value)
  // }

  return (
    <Template>
      <div className={styles.eventCreation}>
        <HeaderTitle title="Event Creation"></HeaderTitle>
        <InputField name="Название ивента">
          <Input type="text" onChange={setEventName} inputValue={eventName} placeholder="Введите название ивента" />
        </InputField>
        <InputField name="Правила">
          <Selector options={rules} placeholder="Выбрите правила..."></Selector>
        </InputField>
        <InputField name="Количество игр">
          <Input type='number' onChange={setGameCount} inputValue={gameCounter}placeholder="" />
        </InputField>
        <InputField name="Начало ивента">
          <Datepicker            
            func={onStartTimeChange}
            currentTime={startTime}
            minTime={currentTime.format('YYYY-MM-DDTHH:mm')}></Datepicker>
        </InputField>
        <InputField name="Конец ивента">
          <Datepicker            
            func={onEndTimeChange}
            currentTime={endTime}
            minTime={startTime.format('YYYY-MM-DDTHH:mm')}></Datepicker>
        </InputField>
        <InfoMessage message={text} onClick={closeMessage} isOpen={isOpen}></InfoMessage>
        <Button onClick={createPopup}>Создать</Button>
      </div>
    </Template>
  );
}

export default EventCreation;
