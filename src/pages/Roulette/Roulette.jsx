import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import PlayerField from '../../components/PlayerField/PlayerField';
import PlayerList from '../../components/PlayerList/PlayerList';
import styles from './Roulette.module.css';

function Roulette() {
  return (
    <>
      <HeaderTitle title="Roulette"></HeaderTitle>
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
          
        </div>
      </div>
    </>
  );
}

export default Roulette;
