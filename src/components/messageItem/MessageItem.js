import React from 'react'

function MessageItem ({user, text, id, date, likes}){

    return (
        <div className="MessageItem" style={{border: '1px solid black'}}>
            <h3>{user}</h3>
            <p>{text}</p>
        </div>
    )
    }
export default MessageItem