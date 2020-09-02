import React from 'react'

function MessageItem ({user, text, id, date, likes}){

    return (
        <div className="MessageItem" style={{border: '1px solid black'}}>
            <h3>{user}</h3>
            <p>{text}</p>
            <ul>
                <li>Users ID: {id}</li>
                <li>Date Created: {date}</li>
                <li>Likes: {likes.length}</li>
            </ul>
        </div>
    )
    }
export default MessageItem