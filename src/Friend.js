import React from 'react'
import "./Friend.css"

export default function Friend(props) {
  return (
    <div className='friend'>
        <h1>{props.name}</h1>
        <p>{props.hobby}</p>
    </div>
  )
}
