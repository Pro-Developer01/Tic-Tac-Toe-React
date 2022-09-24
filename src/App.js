import React, { useEffect, useState, useRef } from 'react'
import SquareMesh from './Components/SquareMesh'
import ReplayIcon from '@mui/icons-material/Replay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';
import Lottie from 'lottie-web';
import data from '../src/data.json';
import firecrackerx from "../src/Assests/firecracker.mp3";
import turnx from "../src/Assests/Turn Change.wav";
import winx from "../src/Assests/win.mp3";
import resetx from "../src/Assests/reset.mp3";
import Drawx from "../src/Assests/Draw.mp3";
import "./App.css";
import { Games } from '@mui/icons-material';

const initialState = ["", "", "", "", "", "", "", "", ""];


export default function App() {
  const [Xturn, setTurn] = useState(true);
  const [pause, setPause] = useState(false);
  const [AnimShow, setAnimShow] = useState(false);
  const [Message, setMessage] = useState("Player X's Turn");
  const [XScore, setXScore] = useState(0);
  const [YScore, setYScore] = useState(0);
  const [gameState, setGamestate] = useState(initialState);
  const firecracker = new Audio(firecrackerx);
  const turn = new Audio(turnx);
  const winxx = new Audio(winx);
  const reset = new Audio(resetx);
  const Draw = new Audio(Drawx);

  const clickHandler = (i) => {
    var strings = Array.from(gameState);
    if (!pause) {
      console.log("gamestate before", gameState);
      if (strings[i] === "") {
        turn.play();
        strings[i] = Xturn ? "X" : "0";
        setGamestate(strings);
        console.log("gamestate", gameState);
        setTurn(!Xturn);
        setMessage(Xturn ? "Player 0's Turn" : "Player X's Turn");
      }

    }
    // else if(strings.length===9)
    // {
    //   setMessage('Match Draw Please Reset');
    //   Draw.play();
    // }

  }
  const CheckWin = () => {
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    win.forEach((e) => {
      const [a, b, c] = e;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
        setMessage("Player " + gameState[a] + " Wins !");
        setPause(true);
        setAnimShow(true);
        firecracker.play();
        winxx.play();
        // console.log("gameState[a]",gameState[a]);
        //   return (gameState[a]);
        (gameState[a] === 'X' ? setXScore(XScore + 1) : setYScore(YScore + 1));
      }
    })
  }
  const container = useRef(null);
  const containerX = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: data,
    })
    Lottie.loadAnimation({
      container: containerX.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: data,
    })
  }, [pause])

  useEffect(() => {
    CheckWin();

    //It waas showing this error : Line 74:5:  React Hook useEffect has a missing dependency: 'CheckWin'. Either include it or remove the dependency array  react-hooks/exhaustive-deps if I was not using the folloeing Disable Rule. 
    //  disable the rule for a single line
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [Xturn]);

  useEffect(() => {
    console.log("XScore", XScore, YScore);
  }, [XScore, YScore]);

  const clearFunc = () => {
    reset.play();
    setGamestate(initialState);
    console.log("gameState", gameState);
    setPause(false);
    setAnimShow(false);
  }
  const PlayPauseHandler = () => {
    setPause(pause ? false : true);
  };

  return (
    <div className='app-header'>
      <div className="score-board">
        <h1 style={{ margin: ' 0' }}>Score Board</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="X-score" style={{
            border: 'solid',
            width: '50%',
            borderRadius: '7px'
          }}>
            <h1>X</h1>
            <hr style={{
              marginTop: '-26px',
              width: '48px'
            }} />
            <h2>{XScore}</h2>
          </div>
          <h1 style={{ margin: ' 0px 7px' }}>:</h1>
          <div className="0-score" style={{
            border: 'solid',
            width: '50%',
            borderRadius: '7px'
          }}>
            <h1>0</h1>
            <hr style={{
              marginTop: '-26px',
              width: '48px'
            }} />
            <h2>{YScore}</h2>
          </div>
        </div>
        <IconButton aria-label="Reset Score" onClick={clearFunc} >
          <ReplayIcon style={{ color: "white" }} />
        </IconButton>
      </div>


      <p className="heading-text ">{Message}</p>
      {AnimShow && <div className="animation">
        <div className="lottie-1" ref={container}>
        </div>
        <div className="lottie-2" ref={containerX}>
        </div>
      </div>
      }
      <div >

        <div className="row jc-center">
          <SquareMesh className="b-bottom-right" initialState={gameState[0]} function={() => { clickHandler(0) }} />
          <SquareMesh className="b-bottom-right" initialState={gameState[1]} function={() => { clickHandler(1) }} />
          <SquareMesh className="b-bottom " initialState={gameState[2]} function={() => { clickHandler(2) }} />
        </div>
        <div className="row jc-center">
          <SquareMesh className="b-bottom-right " initialState={gameState[3]} function={() => { clickHandler(3) }} />
          <SquareMesh className="b-bottom-right " initialState={gameState[4]} function={() => { clickHandler(4) }} />
          <SquareMesh className="b-bottom" initialState={gameState[5]} function={() => { clickHandler(5) }} />
        </div>
        <div className="row jc-center">
          <SquareMesh className="b-right " initialState={gameState[6]} function={() => { clickHandler(6) }} />
          <SquareMesh className="b-right " initialState={gameState[7]} function={() => { clickHandler(7) }} />
          <SquareMesh initialState={gameState[8]} function={() => { clickHandler(8) }} />
        </div>
      </div>
      <div className="button">
        <IconButton aria-label="Reset Game" onClick={clearFunc} >
          <ReplayIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton aria-label="Reset Game" onClick={PlayPauseHandler}  >
          {pause ? <PlayCircleIcon style={{ color: "white" }} /> : <PauseCircleIcon style={{ color: "white" }} />}
        </IconButton>
      </div>
    </div>

  )
}
