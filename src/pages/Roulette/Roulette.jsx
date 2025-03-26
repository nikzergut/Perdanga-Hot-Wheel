import { useParams } from 'react-router';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import PlayerField from '../../components/PlayerField/PlayerField';
import PlayerList from '../../components/PlayerList/PlayerList';
import Wheel from './Wheel/Wheel';
import styles from './Roulette.module.css';
import WheelTest from './Wheel-test/WheelTest';
import WheelPlaceholer from './WheelPlaceHolder/WheelPlaceHolder';


function Roulette() {
  const {id} = useParams()
  return (
    <>
      <HeaderTitle>Roulette</HeaderTitle>
      <div className={styles.contentContainer}>
        <div className={styles.sideInfo}>
          <PlayerCard />
          <PlayerList>
            <PlayerField steamNick="Human 1"></PlayerField>
            <PlayerField steamNick="Human 2"></PlayerField>
            <PlayerField steamNick="Human 3s"></PlayerField>
          </PlayerList>          
        </div>
        <div className={styles.mainInfo}>
          <WheelPlaceholer/>        
        </div>
      </div>
    </>
  );
}

export default Roulette;
