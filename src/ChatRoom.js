import React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import ioClient from 'socket.io-client'

class ChatRoom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    this.io = ioClient('http://localhost:3001')
    this.io.emit('user connected', this.nickname)
    this.wireEvents()
    this.addMessage = this.addMessage.bind(this)
  }

  wireEvents () {
    console.log('wiring events')
    this.nickname = 'test-nick'
    this.io.on('connect', (client) => {
      console.log(`ID: ${this.io.id} - Nickname: ${this.nickname}`) // 'G5p5...'
    })
    this.io.on('chat message', (data) => {
      console.log('receiving message', this.users, data)
      this.setState({
        messages: [...this.state.messages, { msg: data.msg }]
      })
    })
  }

  addMessage (message) {
    console.log('Message added', message)
    this.setState({
      messages: [...this.state.messages, { msg: message }]
    })
    this.io.emit('chat message', {
      nickname: this.nickname,
      msg: message
    })
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
