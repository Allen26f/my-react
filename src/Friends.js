import React from 'react'
import Friend from './Friend'

export default function Friends(props) {

    let friendElement = props.data.friend.map(n => {
        return <Friend name={n.name} hobby={n.hobby} />
  })

  return (
    <div>
        {friendElement}
    </div>
  )
}
