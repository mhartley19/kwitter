import React, {useEffect} from 'react'
import MessageItem from '../components/messageItem/MessageItem'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMessages} from  '../redux/actions/messageActions'
import { MenuContainer } from "../components";

export function MessageFeed () {
const messages = useSelector(state => state.messageReducer.messages)

const dispatch = useDispatch()
    useEffect( () =>{ dispatch(fetchMessages())}, [messages])
    return( 
    <>
    <MenuContainer />
    <h1>Hey look at that !</h1>
    {messages.map((message) => (
        <MessageItem 
            user={message.username}
            text={message.text}
            id={message.id}
            date={message.createdAt}
            likes={message.likes}
            key={message.id}
        />))}
    
    </>
)}

