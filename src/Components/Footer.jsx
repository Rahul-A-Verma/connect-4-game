import React from 'react'
import { game_state_playing } from "../Constant";



const Footer = ({ onClickNewbtn, onClickSuggestbtn, gameState }) => {

  const renderBtn = () => {
    if (gameState === game_state_playing) {
      return <button onClick={onClickSuggestbtn}>Suggest</button>
    }
    return <button onClick={onClickNewbtn}>New Game</button>
  }

  return (
    // 1st way----------

    // <div className='footer'>
    //     <button onClick={onClickNewbtn}>New Game</button>
    //     <button onClick={onClickSuggestbtn}>Suggest</button>
    // </div>

    // 2nd way-------------

    // <div className='footer'>
    //   {gameState === game_state_playing &&
    //    <button onClick={onClickSuggestbtn}>Suggest</button>
    //   }
    //   {gameState!== game_state_playing &&
    //   <button onClick={onClickNewbtn}>New Game</button>
    //   }
    // </div>

    // 3rd way--------------------
    <div className='footer'>
      {renderBtn()}
    </div>

  )
}

export default Footer