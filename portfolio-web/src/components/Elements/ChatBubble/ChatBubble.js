import React, { Component } from 'react';
import posed from "react-pose";
import styled, {keyframes} from 'styled-components'

const ChatBodyHide = posed.button({
  normal: {
    opacity: 1,
    transition: { duration: 1000 }
  },
  start: {
    opacity: 0,
    transition: { duration: 1000 }
  }
})

const ChatBubbleBody = styled(ChatBodyHide)`
  background-color: rgb(0, 76, 241);
  border-radius: 5px;
  max-width: 300px;
  margin: 10px;
  padding: 5px;

  border: none;

  outline: none;

  &:hover {
    cursor: pointer;
  }
`

const TextBody = styled.div`
  overflow: auto;
`

const Text = styled.div`
  color: white;
  font-size: 15pt;
`

const NextTextIdleAnimation = keyframes`
  0% {
    color: rgb(200, 200, 200);
  }
  50% {
    color: rgb(100, 100, 100);
  }
  100% {
    color: rgb(200, 200, 200);
  }
`

const NextText = styled.div`
  border: none;
  background-color: rgb(0, 0, 0, 0);
  outline: none;

  color: grey;
  font-style: italic;
  font-size: 10pt;

  animation: ${NextTextIdleAnimation} 1.8s linear infinite;
`

class ChatBubble extends Component {

  //Focus back on this button every time
  componentDidMount(){
    this.focusButton.focus();
  }
  componentDidUpdate() {
    this.focusButton.focus();
  }

  render() {
    return (
      <ChatBubbleBody
        pose={this.props.hidden? "start" : "normal" }
        ref={(input) => {this.focusButton = input}}
        onClick={this.props.updateIndex}>
        <TextBody>
          <Text>
            {this.props.text}
          </Text>
        </TextBody>
        <NextText>
          {this.props.atEnd? "Restart?" : "Click or Press Enter"}
        </NextText>
      </ChatBubbleBody>
    )
  }
}

export default ChatBubble;