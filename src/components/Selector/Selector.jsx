import { useState } from 'react';
import styles from './Selector.module.css';

function Selector(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredOptions = props.options.sort((a, b) => {
    a.label.localeCompare(b.label);
  });

  function togleSelector() {
    setIsOpen(!isOpen);
  }

  function clickOption(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }
  return (
    <div className={styles.selectorContainer}>
      <div className={styles.selectorButton} onClick={togleSelector}>
        <span>{selectedOption ? selectedOption.label : props.placeholder}</span>
      </div>
      {isOpen && (
        <div className={styles.selectorDropdown}>
          {filteredOptions.map(option => (
            <div
              className={styles.selectorOption}
              onClick={() => {
                clickOption(option);
              }}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Selector;
