import React, { Component } from "react";

class ChatBox extends Component {
  state = {
    isChatOpen: false,
    messages: [],
    messageInput: "",
  };

  toggleChat = () => {
    this.setState((prevState) => ({
      isChatOpen: !prevState.isChatOpen,
    }));
  };

  handleInputChange = (e) => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessage = () => {
    const { messageInput, messages } = this.state;

    if (messageInput.trim() !== "") {
      const newMessage = { sender: "You", message: messageInput };
      this.setState({
        messages: [...messages, newMessage],
        messageInput: "",
      });
    }
  };

  render() {
    const { isChatOpen, messages, messageInput } = this.state;

    return (
      <div className={`chat-box ${isChatOpen ? "active" : ""}`}>
        <div className="chat-header" onClick={this.toggleChat}>
          Chat
        </div>
        <div className="chat-content">
          {messages.map((message, index) => (
            <div key={index}>
              {message.sender}: {message.message}
            </div>
          ))}
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={messageInput}
          onChange={this.handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.sendMessage();
            }
          }}
        />
      </div>
    );
  }
}

export default ChatBox;
