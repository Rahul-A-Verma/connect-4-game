import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { computerPlay, isDraw, isWinner } from "./helper";
import {
  game_state_draw,
  game_state_playing,
  game_state_win,
  Noplayer,
  player_1,
  player_2,
} from "../Constant";

// const player_1 = 1;
// const player_2 = 2;
// const Noplayer = 0;

// const game_state_idle = 0
// const game_state_playing = 1
// const game_state_win = 2
// const game_state_draw = 3

const Game = () => {
  const [gameBoard, setgameBoard] = useState(Array(16).fill(Noplayer));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [gameState, setGameState] = useState(game_state_playing);
  const [winPlayer, setWinPlayer] = useState(Noplayer)


  const initBoard = () => {
    // setCurrentPlayer(player_1)
    // setgameBoard(Array(16).fill(Noplayer))
    const circle = [];
    for (let i = 0; i < 16; i++) {
      circle.push(renderCircle(i));
    }
    return circle;
  };
  console.log(gameBoard);

  const initGame = () => {
    setCurrentPlayer(player_1)
    setgameBoard(Array(16).fill(Noplayer))
    console.log('initGame');
    setGameState(game_state_playing)
  }

  useEffect(() => {
    initGame();
  }, [])

  const suggestbtn = () => {
    // console.log("Suggest Clicked!");
    // circleClicked(computerPlayRandom(gameBoard))
    circleClicked(computerPlay(gameBoard))
  }

  const circleClicked = (id) => {
    if (gameBoard[id] !== Noplayer) return
    if (gameState !== game_state_playing) return
    // console.log(`Clicked Id:${id}`);
    // const board = [...gameBoard]
    // board[id]=currentPlayer;
    // setgameBoard(board)
    setgameBoard((prev) => {
      return prev.map((circle, index) => {
        console.log(index, id, circle);
        if (index == id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);

    console.log(currentPlayer);

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(game_state_win);
      setWinPlayer(currentPlayer)
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(game_state_draw);
      setWinPlayer(Noplayer)
    }
  }

  const renderCircle = (id) => {
    return (
      <Circle
        key={id}
        id={id}
        player={`player-${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      ></Circle>
    );
  }

  return (
    <>
      <Header currentPlayer={currentPlayer} gameState={gameState} winPlayer={winPlayer} />
      <div
        // className='grid grid-cols-4 grid-rows-1 gap-4 p-10'
        //   style={{
        //     display: "grid",
        //     gridTemplateColumns: "1fr 1fr 1fr 1fr",
        //     gridTemplateRows: "1fr 1fr 1fr 1fr",
        //     padding: 20,
        // 	width:'500px',
        // 	position:"absolute",
        // 	left:'50%',
        // 	marginLeft:"-250px",
        // 	top:"25%"
        //   }}
        className="gameBoard"
      >
        {initBoard()}

        {/* {renderCircle(0)}
		{renderCircle(1)}
		{renderCircle(2)}
		{renderCircle(3)} */}
        {/* <Circle id={1} player='player-1' onCircleClicked={circleClicked}></Circle>
      <Circle id={2} player='player-2' onCircleClicked={circleClicked}></Circle>
      <Circle id={3} player='player-1' onCircleClicked={circleClicked} ></Circle>
      <Circle id={4} player='player-2' onCircleClicked={circleClicked}></Circle>
      <Circle id={5} player='player-1' onCircleClicked={circleClicked} ></Circle>
      <Circle id={6} player='player-2' onCircleClicked={circleClicked}></Circle>
      <Circle id={7} onCircleClicked={circleClicked} ></Circle>
      <Circle id={8} onCircleClicked={circleClicked}></Circle>
      <Circle id={9} onCircleClicked={circleClicked}></Circle>
      <Circle id={10}onCircleClicked={circleClicked}></Circle>
	  <Circle id={11}onCircleClicked={circleClicked}></Circle>
	  <Circle id={12}onCircleClicked={circleClicked}></Circle>
	  <Circle id={13}onCircleClicked={circleClicked}></Circle>
	  <Circle id={14}onCircleClicked={circleClicked}></Circle>
	  <Circle id={15}onCircleClicked={circleClicked}></Circle>
	  <Circle id={16}onCircleClicked={circleClicked}></Circle> */}
      </div>
      <Footer onClickNewbtn={initGame} onClickSuggestbtn={suggestbtn} gameState={gameState} />
    </>
  );
};

export default Game;
