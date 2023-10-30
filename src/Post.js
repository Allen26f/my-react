import React, { useState } from 'react'
import "./Posts.css"

export default function Post(props) {
  let post_title = React.createRef()



  function onElement() {
   post_title.current.style.color="pink"
  }

  function outElement() {
    post_title.current.style.color="black"
  }

  const [likes, setlikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  function likePost() {
    setlikes(likes + 1)
  }

  function dislikePost() {
    setDislikes(dislikes + 1)
  }

  return (
    <div className='add-post'>
        <h1 ref={post_title} onMouseEnter={onElement} onMouseLeave={outElement}>{props.postTitle}</h1>
        <p>{props.text}</p>
        <p>Dislikes: {dislikes}</p>
        <p>likes: {likes}</p>
        <button className='likes' onClick={likePost}>Like post</button>
        <button className='dislikes' onClick={dislikePost}>dislike post</button>
        <button className='delete-btn' onClick={() => props.deletePost(props.id)}>Delete post</button>
    </div>
  )
}
