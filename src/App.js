import React, { useState } from 'react'
import SquareMesh from './Components/SquareMesh'

const initialState=[""," "," "," "," "," "," "," "," "];

export default function App() {
  const [turn,setTurn]=useState("X");
  const [gameState,setGamestate]=useState(initialState);
const clickHandler=(e)=>{
console.log("check",e);
}
  return (
    <div className='app-header'>
      <p className="heading-text ">heading-text</p>
      <div className="row jc-center">
        <SquareMesh className="b-bottom-right" initialState={gameState[0]} function={()=>{gameState[0]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
        <SquareMesh className="b-bottom-right" initialState={gameState[1]}  function={()=>{gameState[1]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
        <SquareMesh className="b-bottom " initialState={gameState[2]} function={()=>{gameState[2]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
      </div>
      <div className="row jc-center">
        <SquareMesh className="b-bottom-right " initialState={gameState[3]} function={()=>{gameState[3]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
        <SquareMesh className="b-bottom-right " initialState={gameState[4]} function={()=>{gameState[4]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
        <SquareMesh className="b-bottom" initialState={gameState[5]} function={()=>{gameState[5]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
      </div>
      <div className="row jc-center">
        <SquareMesh className="b-right " initialState={gameState[6]} function={()=>{gameState[6]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
        <SquareMesh className="b-right " initialState={gameState[7]} function={()=>{gameState[7]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
        <SquareMesh initialState={gameState[8]} function={()=>{gameState[8]=`${turn}`; setTurn(turn==="X"? "0":"X")}}/>
      </div>

      <div className="button">
        <button className='clear-button' onClick={()=>{setGamestate([initialState]); console.log("gameState",gameState);}}>Clear Board</button>
      </div>
    </div>

  )
}
