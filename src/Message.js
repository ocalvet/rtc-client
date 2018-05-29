import React from 'react'
import './Message.css'

const Message = ({ message }) => {
  return (
    <div className='msg'>{message.msg}</div>
  )
}

export default Message
