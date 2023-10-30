import React, { useEffect, useRef, useState } from 'react'
import Post from './Post'
import "./Posts.css"
export default function Posts(props) {

    const [posts_count, setCount] = useState(props.posts.length)

    let postData = props.posts
    let [posts_data, setPosts] = useState(postData);
    const [text, setText] = useState("");
    const [postTitle, setTitle] = useState("");

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            text,
            postTitle
        }
        setPosts([...posts_data, newPost]);
        setTitle('');
        setCount(posts_data.length + 1);
        setText('');
    }

    let postElement = posts_data.map(p => {
        return <Post id={p.id} postTitle={p.postTitle} text={p.text} deletePost={deletePost} />
    })

    useEffect(() => {
        console.log("Все данные загружены")
    })

    function deletePost(post_id) {
        setPosts(posts_data.filter(p => p.id != post_id))
        setCount(posts_data.length - 1)
    }

    return (
        <div className='add-text'>
            <form action="">
                <div className="form-post">
                    <div className="form-input">
                        <input type="text" value={postTitle} onChange={e => setTitle(e.target.value)} placeholder="Название поста" />
                    </div>
                    <div className="form-input">
                        <textarea type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Ведите текст поста"></textarea>
                    </div>
                    <button type="button" onClick={addNewPost}>Добавить</button>
                </div>
            </form>
            <h2>Количество постов: {posts_count}</h2>
            {postElement}
        </div>
    )
}