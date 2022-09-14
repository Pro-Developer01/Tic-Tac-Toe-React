import React, { useEffect, useState } from 'react'
import SquareMesh from './Components/SquareMesh'
import ReplayIcon from '@mui/icons-material/Replay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';
import Lottie from 'react-lottie';
import data from '../src/data.json';

const initialState=["","","","","","","","",""];

export default function App() {
  const [Xturn,setTurn]=useState(true);
  const [pause,setPause]=useState(false);
  const [Message,setMessage]=useState("Player X's Turn");
  const [gameState,setGamestate]=useState([initialState]);

  const clickHandler=(i)=>{
    if (!pause){
    var strings=Array.from(gameState);
    strings[i]=Xturn?"X":"0";
    setGamestate(strings);
    console.log("gamestate",gameState);
    setTurn(!Xturn);
    setMessage(Xturn?"Player 0's Turn":"Player X's Turn");}
  }

  const clearFunc=()=>{
    setGamestate(initialState); console.log("gameState",gameState);
    setPause(false);
  }
  const PlayPauseHandler=()=>{
    setPause(pause?false:true);
  }

  const CheckWin=()=>{
    let win=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    win.forEach((e)=>{
      const [a,b,c]=e;
      if(gameState[a] && gameState[a]===gameState[b] && gameState[b]===gameState[c])
      {
        setMessage("Player "+gameState[a]+" Wins !");
        setPause(true);

      }
    })
  }

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

useEffect(()=>{
  CheckWin();
},[Xturn])
  return (
    <div className='app-header'>
      <p className="heading-text ">{Message}</p>
      {pause&& <div className="animation">
        <div className="lottie-1">
        <Lottie options={defaultOptions}
              height={623}
              width={400}
              isStopped={false}
              isPaused={false}/>
        </div>
        <div className="lottie-2">
        <Lottie options={defaultOptions}
              height={623}
              width={400}
              isStopped={!pause}
              isPaused={false}/>
        </div>
      </div>
}
      <div >

      <div className="row jc-center">
        <SquareMesh className="b-bottom-right" initialState={gameState[0]} function={()=>{clickHandler(0)}}/>
        <SquareMesh className="b-bottom-right" initialState={gameState[1]}  function={()=>{clickHandler(1)}}/>
        <SquareMesh className="b-bottom " initialState={gameState[2]} function={()=>{clickHandler(2)}}/>
      </div>
      <div className="row jc-center">
        <SquareMesh className="b-bottom-right " initialState={gameState[3]} function={()=>{clickHandler(3)}}/>
        <SquareMesh className="b-bottom-right " initialState={gameState[4]} function={()=>{clickHandler(4)}}/>
        <SquareMesh className="b-bottom" initialState={gameState[5]} function={()=>{clickHandler(5)}}/>
      </div>
      <div className="row jc-center">
        <SquareMesh className="b-right " initialState={gameState[6]} function={()=>{clickHandler(6)}}/>
        <SquareMesh className="b-right " initialState={gameState[7]} function={()=>{clickHandler(7)}}/>
        <SquareMesh initialState={gameState[8]} function={()=>{clickHandler(8)}}/>
      </div>
      </div>

     {/* {pause && ( <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>)
  } */}

      <div className="button">
      <IconButton aria-label="Reset Game"  onClick={clearFunc} >
        <ReplayIcon  style={{color: "white"}} />
      </IconButton>
      <IconButton aria-label="Reset Game"   >
        <PlayCircleIcon  style={{color: "white"}} onClick={PlayPauseHandler}/>
      </IconButton>
      <IconButton aria-label="Reset Game"   >
        <PauseCircleIcon  style={{color: "white"}} onClick={PlayPauseHandler}/>
      </IconButton>
      </div>
    </div>

  )
}
