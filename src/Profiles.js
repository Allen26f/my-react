import React from 'react'
import Post from './Post'
import Profile from './Profile'



export default function Profiles(props) {

    let profileElement = props.data.users.map(n => {
        return <Profile name={n.name} login={n.login} />
  })
  
  return (
    <div>
      {profileElement}
    </div>
  )
}
