import React from 'react'
import '../Components/SquarMesh.css'

export default function SquareMesh(props) {
    const classes=(props.className?`${props.className} square`:'square');
  return (
    <div >
      <span className={classes} onClick={props.function}>{props.initialState}</span>
    </div>
  )
}
