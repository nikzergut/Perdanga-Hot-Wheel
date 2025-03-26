import { useState } from 'react'
import Button from '../Button/Button'
import styles from './Modal.module.css'

function Modal(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    return(
        <div className={styles.modal} onClick={(e) => {
            e.preventDefault()
            console.log()
        }}>
            <div className={styles.modalWrapper}>
                <div className={styles.modalContent}>
                    <span>Hello</span>
                </div>
                <div className={styles.modalButtons}>
                    <Button onClick={() => {

                    }}>Да</Button>
                    <Button onClick={() => {
                        
                    }}>Нет</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal