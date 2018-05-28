import React from 'react'
import './MessageForm.css'

class MessageForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSendMessage = this.handleSendMessage.bind(this)
  }

  handleMessageChange (event) {
    this.setState({
      message: event.target.value
    })
  }

  handleSendMessage () {
    const { onAddMessage } = this.props
    onAddMessage(this.state.message)
  }
  render () {
    return (
      <div className='container'>
        <input id='m' autoComplete='off' value={this.state.message} onChange={this.handleMessageChange} />
        <button onClick={this.handleSendMessage}>Send</button>
      </div>
    )
  }
}

export default MessageForm
