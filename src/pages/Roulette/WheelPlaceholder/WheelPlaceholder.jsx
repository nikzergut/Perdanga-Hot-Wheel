import Button from "../../../components/Button/Button"
import styles from './WheelPlaceholder.module.css'
import Modal from "../../../components/Modal/Modal"

function getWinGame() {
    // server req
}

function WheelPlaceholer() {
    const [winGame, setWinGame] = useState()
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    return(
        <>
        
        <div className={styles.wheelPlaceholderContainer}>
            <div>
                {winGame ? winGame : 'No game has been win'}
            </div>
            <Button onClick={() => {
                setWinGame('OutLast')
            }}>Получить игру</Button>
            <Button onClick={() => {
                // acceptGame
            }}>Принять игру</Button>            
        </div>        
        <Modal isOpen={isModalOpen}>Согласны с игрой?</Modal>
        {isModalOpen ? <Modal>Согласны с игрой?</Modal> : <div></div>}     
        </>
    )
}

export default WheelPlaceholer