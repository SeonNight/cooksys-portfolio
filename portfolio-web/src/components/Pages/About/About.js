import React, { Component } from 'react';


import styled from 'styled-components'
import ChatBubble from '../../Elements/ChatBubble/ChatBubble'
import CodeBird from '../../Elements/CodeBird/CodeBird'

const CenterBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const CodeBirdChat = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`

const ResumeImage = styled.img`
  width: 100%;
  margin: auto;
  object-fit: content;
`

const ChatContainer = styled.div`
  position: relative;
  width: 50%;
  left: 20px;
`

const CodBirdContainer = styled.div`
  position: relative;
  width: 200px;
  height: 180px;

  left: 20px;
`

class About extends Component {
  chats = [
    {
      text: 'My name is Seong Kim',
      pose: 'normal'
    },{
      text: 'I am a computer developer with a love of the arts',
      pose: 'happy'
    },{
      text: 'Mainly pictures and animations',
      pose: 'normal'
    },{
      text: 'Was never that into theater',
      pose: 'inquisitive'
    },{
      text: 'When I was young I wanted to become an artist',
      pose: 'normal'
    },{
      text: 'I would always draw pictures at home and during class',
      pose: 'normal'
    },{
      text: 'Sorry to all my past teachers',
      pose: 'questioning'
    },{
      text: 'So I wanted to become an artist',
      pose: 'normal'
    },{
      text: 'Until one bored day in math class',
      pose: 'normal'
    },{
      text: 'Did you know, graphic calculators can be programmed?',
      pose: 'inquisitive'
    },{
      text: 'I didn\' really understand it at first',
      pose: 'normal'
    },{
      text: 'But there was this little bit of code that calculated the Quadratic formula',
      pose: 'normal'
    },{
      text: 'It took me a while, but I made my first program',
      pose: 'normal'
    },{
      text: 'Adding TWO numbers together',
      pose: 'happy'
    },{
      text: 'I had made more *ahem* "Useful" programs since then',
      pose: 'questioning'
    },{
      text: 'But because of this incident',
      pose: 'normal'
    },{
      text: 'Instead of going to college for art, I graduated with a Bachelor\'s degree in Computer Science',
      pose: 'happy'
    },{
      text: 'With an animation minor',
      pose: 'normal'
    },{
      text: 'Just because I learned that I loved Computer Science doesn\'t mean I lost my passion for art',
      pose: 'happy'
    }
  ]

  state = {
    chatIndex: 0,
    atEnd: false,
    birdHidden: false,
  }

  UpdateChatIndex = event => {
    if(this.state.chatIndex < this.chats.length-1) {
      this.setState({chatIndex: this.state.chatIndex + 1})
      if((this.state.chatIndex + 2) === this.chats.length) {
        this.setState({atEnd: true})
      }
    } else {
      //Reset
      this.setState({atEnd: false})
      this.setState({chatIndex: 0})
    }
  }

  //Why does it have to be in this format?
  UpdateBirdPose = pose => {
    this.setState({birdPose: pose})
  }

  render() {
    return(
      <div>
        <h1>About Me</h1>
        <CenterBody>
          <CodeBirdChat>
            <ChatContainer>
              <ChatBubble atEnd={this.state.atEnd} text={this.chats[this.state.chatIndex].text} updateIndex={this.UpdateChatIndex}/>
            </ChatContainer>
            <CodBirdContainer>
              <CodeBird hidden={this.state.birdHidden} pose={this.chats[this.state.chatIndex].pose}/>
            </CodBirdContainer>
          </CodeBirdChat>
          <div>
            <h2>Resume</h2>
            <ResumeImage src={require("../../../images/resume.png")} alt="resume" />
          </div>
        </CenterBody>
      </div>)
  }
}

export default About