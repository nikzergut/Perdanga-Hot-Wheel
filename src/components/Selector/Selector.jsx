import { useState } from 'react';
import styles from './Selector.module.css';

function Selector(props) {
  const filteredOptions = props.options.sort((a, b) => {
    a.label.localeCompare(b.label);
  });  
  
  return (
    <div className={styles.selectorContainer}>
      <div className={styles.selectorButton} onClick={props.openSelector}>
        <span>{props.selectedOption ? props.selectedOption.label : props.placeholder}</span>
      </div>
      {props.isOpen && (
        <div className={styles.selectorDropdown}>
          {filteredOptions.map(option => (
            <div
              className={styles.selectorOption}
              onClick={() => {
                props.onClick(option);
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
