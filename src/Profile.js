import React from 'react'
import "./Profile.css"


export default function Profile(props) {
  return (

    
    <div className='add-friends'>
        <h2>{props.login}</h2>
        <p>{props.name}</p>
    </div>


  )
}
