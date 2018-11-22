import React, { Component } from 'react';

import styled from 'styled-components'

const ChatScreenBody = styled.div`

`
const Pad = styled.div`
  background-color: grey;
  border: solid 3px rgb(85, 85, 85);
  border-radius: 20px;
  height: 300px;
  width: 500px;
  
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
`

const TextBody = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

const TextBox = styled.div`
  background-color: rgb(0, 140, 255);
  border-radius: 5px;
  max-width: 300px;
  color: white;
  font-size: 12pt;
  margin: 10px;
  padding: 5px;
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
`
const InputHelpText = styled.div`
  color: grey;
  font-style: italic;
  font-size: 10pt;
`

class ChatScreenInput extends React.Component {
  _handleKeyPress = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  render() {
    return (
      <input type="text" onKeyPress={this._handleKeyPress}/>
        <InputHelpText>
          Click or Press Enter
        </InputHelpText>
      )
  }
}

class ChatScreen extends Component {
  render() {
    return(
      <ChatScreenBody> 
        <Pad>
          <Screen>
            <TextBody>
              <InputText>
                This is an input text
              </InputText>
              <TextBox>
                This is a text box
              </TextBox>
              <InputBody>
                <InputChoices>
                  <InputButton>
                    This is an input button
                  </InputButton>
                  <InputButton>
                    Option numero 2
                  </InputButton>
                  <InputButton>
                    Option numero 3
                  </InputButton>
                  <InputButton>
                    Option numero 4
                  </InputButton>
                </InputChoices>
              </InputBody>
            </TextBody>
            <InputHelp>
              <ChatScreenInput/>
            </InputHelp>
          </Screen>
        </Pad>
      </ChatScreenBody>
    )
  }
}

export default ChatScreen;