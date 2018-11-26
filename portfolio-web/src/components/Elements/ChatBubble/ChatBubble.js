import React, { Component } from 'react';

import styled, {keyframes} from 'styled-components'

const ChatBubbleBody = styled.button`
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

//{this.props.options.map((element,index) => {return <InputButton key={index} value={element.value}>{element.text}</InputButton>})}
class ChatBubble extends Component {
  componentDidMount(){
    this.nameInput.focus();
  }
  //Focus back on this button every time
  componentDidUpdate(prevProps, prevState) {
    this.nameInput.focus();
  }

  render() {
    return (
      <ChatBubbleBody
        ref={(input) => {this.nameInput = input}}
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