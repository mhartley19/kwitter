import React from 'react'
import {useSelector} from 'react-redux'

function MessageItem ({user, text, id, date, likes}){

    const username = useSelector(state => state.auth.username)
    const isLiked = () => {
        // console.log(`username: ${username} id: ${id} liked: ${likes.map(like => like.username ===  username)
        return (likes.some(like => like.username === username ))
    }
    const toggleLike = () => {
        if(isLiked){
            

        }
    }    


    return (
        <div className="MessageItem" style={{border: '1px solid black'}}>
            <h3>{user}</h3>
            <p>{text}</p>
            <ul>
                <li>Users ID: {id}</li>
                <li>Date Created: {date}</li>
                <li>Likes: {likes.length}</li>
                <input defaultChecked={isLiked()} type="checkbox"/>
            </ul>
        </div>
    )
    }
export default MessageItem