import React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class ChatRoom extends React.Component {
  render () {
    return (
      <div>
        <MessageList />
        <MessageForm />
      </div>
    )
  }
}

export default ChatRoom
