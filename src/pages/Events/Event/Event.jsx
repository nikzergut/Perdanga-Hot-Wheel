import { useParams } from "react-router"
import { Link } from "react-router"
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle"
import Button from "../../../components/Button/Button"
import styles from './Event.module.css'
function Event() {
    const {id} = useParams()
    const currentTime = 222
    const EVENT = {
        startDate: 123,
        endDate: 12,
        members: [
            'chocko', 'koko', 'boko'
        ]
    }
    return (
        <>
            <HeaderTitle>Event Name</HeaderTitle>
            <div className={styles.eventContainer}>
                <div>{EVENT.startDate + " - " + EVENT.endDate}</div>
                <div>
                    {EVENT.endDate < currentTime &&
                        <div>ACTIVE</div>
                    }
                </div>
                <div>
                    {EVENT.members.map((member) => {
                        return <div>{member}</div>
                    })}
                </div>
                <Link to={'/roulette/'+1}>
                    <Button>Крутить игры</Button>
                </Link>
            </div>
        </>
    )
}

export default Event