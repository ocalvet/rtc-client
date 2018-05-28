import React from 'react'
import Message from './Message'

const MessageList = ({ messages }) => {
  return (
    <div id='messages'>
      {messages.map((m, i) => (
        <Message key={i} message={m} />
      ))}
    </div>
  )
}

export default MessageList
