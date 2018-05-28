import React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class ChatRoom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage (message) {
    console.log('Message added', message)
  }

  render () {
    const { messages } = this.state
    return (
      <div>
        <MessageList messages={messages} />
        <MessageForm onAddMessage={this.addMessage} />
      </div>
    )
  }
}

export default ChatRoom
