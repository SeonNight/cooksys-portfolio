import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import posed from "react-pose";

const BlackScreenAnimation = posed.div({
  start: {
    height: '90%',
    transition: { duration: 10 }
  },
  normal: {
    height: '0',
    transition: { duration: 10 }
  }
})

const BlackScreen = styled(BlackScreenAnimation)`
  background-color: black;
  position: absolute;
  width: 90%;
  height: 90%;
`

const ChatScreenBody = styled.div`
`

const Pad = styled.div`
  background-color: grey;
  border: solid 3px rgb(85, 85, 85);
  border-radius: 20px;
  height: 300px;
  width: 500px;
  box-shadow: 2px 5px 5px grey;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Screen = styled.div`
  background-color: rgb(213, 221, 228);
  border: solid 2px rgb(85, 85, 85);
  border-radius: 5px;
  height: 90%;
  width: 90%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const TextBody = styled.div`
  width: 100%;
  overflow-y: scroll;
`

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`
const InputBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const InputChoices = styled.div`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
`

const InputButton = styled.button`
  border: none;
  background-color: rgb(0, 66, 121);
  color: white;
  margin: 5px;
  padding: 5px;

  outline: none;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgb(0, 36, 66);
  }
  &:active {
    background-color: rgb(95, 183, 255);
  }
`
const InputText = styled.div`
  background-color: rgb(0, 76, 241);
  border-radius: 5px;
  max-width: 300px;
  color: white;
  font-size: 12pt;
  margin: 10px;
  padding: 5px;
`

const InputHelp = styled.div`
  background-color: rgb(207, 207, 207);
  border-top: 1px solid black
  width: 100%;
  height: 10%;
  font-weight: bold;
`

const InputHelpTextIdleAnimation = keyframes`
  0% {
    color: grey;
  }
  50% {
    color: rgb(73, 73, 73);
  }
  100% {
    color: grey;
  }
`

const InputHelpText = styled.button`
  border: none;
  background-color: rgb(0, 0, 0, 0);
  outline: none;

  color: grey;
  font-style: italic;
  font-size: 10pt;

  &:hover {
    cursor: pointer;
  }
  
  animation: ${InputHelpTextIdleAnimation} 1.8s linear infinite;
`

//For the main button on bottom of screen
class ChatScreenInput extends React.Component {
  //Focus back on this button every time
  componentDidMount(){
    this.nameInput.focus();
  }
  componentDidUpdate() {
    this.nameInput.focus();
  }

  render() {
    //Detect when going back to launch screen
    if(!this.props.backToLaunch) {
      return (
          <InputHelpText
            disabled={this.props.enabled? "" : "disabled"}
            ref={(input) => {this.nameInput = input}}
            value={this.props.value}
            onClick={this.props.handleOnClick}>
              {this.props.enabled? "Click or Press Enter" : "Choose an Option"}
          </InputHelpText>
        )
    } else {
      return (
          <InputHelpText onClick={this.props.handlePageChange} value='0' ref={(input) => {this.nameInput = input}}>
            Bye
          </InputHelpText>
      )
    }
  }
}

//Chat bubbles in screen
class ChatScreenText extends Component {
  render() {
    return(
      <InputText>
        {this.props.text}
      </InputText>
    )
  }
}

//Button options in chat
class ChatOptions extends Component {
  state = {
    clicked: false
  }

  //Disable buttons and return on click
  buttonClicked = event => {
    //Make sure buttons aren't repeatably clickable
    if(this.state.clicked === false) {
      this.props.handleOptions(event)
      this.setState({clicked: true})
    }
  }

  //If linked button is pressed use handle page to send info
  changePage = (event) => {
    this.props.handlePageChange(event)
  }

  render() {
    return(
      <InputBody>
        <InputChoices>
          {this.props.options.map((element,index) => {
            if(this.state.clicked === false) {
              if(element.value === -2) {
                return <InputButton key={index} onClick={this.changePage} value={element.page}>{element.text}</InputButton>
              }
              return <InputButton key={index} value={element.value} onClick={this.buttonClicked}>{element.text}</InputButton>
            } else {
              return <InputButton key={index} value={element.value}>{element.text}</InputButton>
            }
          })}
        </InputChoices>
      </InputBody>
    )
  }
}

//The ChatScreen
class ChatScreen extends Component {
  state = {
    enableNext: true,
    nextValue: 1,
    chatIndex: 0,
    backToLaunch: false
  }

  //Initialize chat property
  chats = this.props.chatStart
  storeChat = this.props.chats

  //Handle chatScreen
  handleChatChange = event => {
    //What is next chat?
    if(this.storeChat[event.target.value].nextValue === -1) {
      //Push in the new chat and desable main button
      this.chats.push(this.storeChat[event.target.value])
      this.setState({enableNext: false})
    } else if(this.storeChat[event.target.value].nextValue === -2) {
      //Linking back to launch

      //Set the next value and enable button
      //Push in the new chat, set next value to zero and enable main button
      //so it goes back to launch
      this.chats.push(this.storeChat[event.target.value])
      this.setState({nextValue: 0})
      this.setState({enableNext: true})
      this.setState({backToLaunch: true})
    } else {
      //Push in the new chat, set next value and enable main button
      this.chats.push(this.storeChat[event.target.value])
      this.setState({nextValue: this.storeChat[event.target.value].nextValue})
      this.setState({enableNext: true})
    }

    //Pose bird
    this.props.updateBirdPose(this.storeChat[event.target.value].pose);

    //Update chat index
    this.setState({chatIndex: event.target.value})
  }

  //Keep the chat focused at bottom of screen
  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return(
      <ChatScreenBody> 
        <Pad>
          <Screen>
            <BlackScreen pose={this.props.screenOn? 'normal' : 'start'}/>
            <TextBody>
              {this.chats.map((element, index) => {
                return <TextBox key={index}>
                  <ChatScreenText text={element.text}/>
                  <ChatOptions handlePageChange={this.props.handlePageChange} options={element.options} handleOptions={this.handleChatChange}/>
                </TextBox>
              })}
              <div ref={el => { this.el = el; }} />
            </TextBody>
            <InputHelp>
              <ChatScreenInput handlePageChange={this.props.handlePageChange} backToLaunch={this.state.backToLaunch} enabled={this.state.enableNext} value={this.state.nextValue} handleOnClick={this.handleChatChange}/>
            </InputHelp>
          </Screen>
        </Pad>
      </ChatScreenBody>
    )
  }
}

export default ChatScreen;