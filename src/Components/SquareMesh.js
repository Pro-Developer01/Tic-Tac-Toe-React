import React from 'react'
import '../Components/SquarMesh.css'

export default function SquareMesh(props) {
    const classes=(props.className?`${props.className} square`:'square');
  return (
    <div id="boxes" >
      <p className={classes} onClick={props.function}>{props.initialState}</p>
    </div>
  )
}
