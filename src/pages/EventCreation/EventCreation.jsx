import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import Selector from '../../components/Selector/Selector';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import styles from './EventCreation.module.css';
import Datepicker from '../../components/DatePicker/DatePicker';
import InfoMessage from '../../components/InfoMessage/InfoMessage';
import Button from '../../components/Button/Button';
import dayjs from 'dayjs';



function EventCreation() {
  // Event Name
  const [eventName, setEventName] = useState('');
  // Game Count
  const [gameCounter, setGameCount] = useState('');
  // Rule
  const [rules, setRule] = useState([
    
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
    
  ])
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // Datepicker
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(null);
  const [currentTime] = useState(dayjs());
  // Info Message
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [text, setText] = useState('');

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
    setIsOpenInfo(prev => {
      return !prev;
    });
  }

  const [formData, setFormData] = useState({})
    
  function createPopup() {
    setText('Данные отправлены в министерство');
    setIsOpenInfo(true);
    // setFormData((prev) => {
    //   prev.title = eventName
    //   prev.rules = 

    // })
    setTimeout(() => {
      console.log("IS OPEN IS", isOpenInfo)
      setIsOpenInfo(false);      
    }, 4000);
  }
 
  function selectOption(option) {
    setSelectedOption(option)
    setIsOpenSelector(false)
  }

  function togleSelector() {
    setIsOpenSelector((prev) => {
      return !prev
    });
  }

  return (
    <div className={styles.eventCreation}>
      <HeaderTitle title="Event Creation"></HeaderTitle>
      <InputField name="Название ивента">
        <Input type="text" onChange={setEventName} inputValue={eventName} maxLength={32} placeholder="Введите название ивента" />
      </InputField>
      <InputField name="Правила">
        <Selector options={rules} selectedOption={selectedOption} isOpen={isOpenSelector} onClick={selectOption} openSelector={togleSelector} placeholder="Выбрите правила..."></Selector>
      </InputField>
      <InputField name="Количество игр">
        <Input type="number" maxLength={2} onChange={setGameCount} inputValue={gameCounter} placeholder="" />
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
      <InfoMessage message={text} onClick={closeMessage} isOpen={isOpenInfo}/>
      <Button onClick={createPopup}>Создать</Button>
    </div>
  );
}

export default EventCreation;
