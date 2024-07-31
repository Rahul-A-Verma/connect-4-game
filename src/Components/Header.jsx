import React from 'react'
import {
  game_state_draw,
  game_state_playing,
  game_state_win,
} from "../Constant";
const Header = ({ currentPlayer, gameState, winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case game_state_playing:
        return <div>player {currentPlayer} Turn</div>
      case game_state_win:
        return <div>player {winPlayer} Win</div>
      case game_state_draw:
        return <div>Game Draw</div>
      default:

    }
  }
  return (
    <div className='panel header'>
      <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}

export default Header