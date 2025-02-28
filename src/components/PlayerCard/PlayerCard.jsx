import styles from './PlayerCard.module.css';
import Input from '../Input/Input';
import { useState } from 'react';
import Button from '../Button/Button';
import PlayerField from '../PlayerField/PlayerField';
import GameListItem from '../GameListItem/GameListItem';
// function onChange(e) {
//   set
// }

function PlayerCard() {
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState('');



  function enterName(e) {
    if (e.code == 'Enter') {
      if (games.length < 3 && e.target.value != "") {
        setGames([...games, e.target.value]);
        setGameName('');
      }
      else {
        console.log('Too much games or empty string')
      }
      
    }
  }

  function agreeGames() {
    console.log('Games have been accepted');
  }

  function deleteGameItem(gameName) {   
    setGames((prev) => {      
      const newGames = prev.filter((game) => 
        gameName != game
      )      
      return newGames
    })
  }
  return (
    <div className={styles.playerCard}>
      <PlayerField steamNick="zalupechka" steamAvatarSource="steamSource" />
      <Input        
        placeholder="Название игры..."
        type="text"
        onChange={setGameName}
        inputValue={gameName}
        enterKey={enterName}
        maxLength={32}></Input>

      <ul>
        {games.map(game => {
          return (            
            <GameListItem key={game} gameName={game} onClick={deleteGameItem}></GameListItem>
          );
        })}
      </ul>
      <Button onClick={agreeGames}>Подтвердить</Button>
    </div>
  );
}

export default PlayerCard;
