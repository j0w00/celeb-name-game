import { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import './Start.css'
import logo from '../../images/logo-name-game.svg'
import Button from '../../components/Button/Button'

const Start = () => {
  const { handleStartGameClick } = useContext(GameContext);

  return (
    <div className="start">
      <img src={logo} className="start__logo" alt="Name Game" />
      <p className="start__intro">Try matching the celebrity to their photo.</p>
      <Button onClick={() => handleStartGameClick("practice")}>
        Practice Mode
      </Button>
      <Button onClick={() => handleStartGameClick("timed")}>
        Timed Mode
      </Button>
    </div>
  )
}

export default Start