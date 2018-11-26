import React, { Component } from 'react';
import posed from "react-pose";
import styled from 'styled-components'

import ChatBubble from '../../Elements/ChatBubble/ChatBubble'
import CodeBird from '../../Elements/CodeBird/CodeBird'
import ProfileCard from '../../Elements/ProfileCard/ProfileCard'

const CodeBirdAnimation = posed.div({
  start: {
    top: '-600px'
  },
  normal: {
    top: '0px'
  },
  startToNormal:{
    top: '0px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-40px',
        '-20px',
        to],
      times: [0, 0.3, 0.6, 1],
      duration: 1300
    })
  },
  normalToStart:{
    top: '-600px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-20px',
        '0px',
        to],
      times: [0, 0.4, 0.7, 1],
      duration: 1300
    })
  }
})

const CardAnimation = posed.div({
  start: {
    top: '-620px'
  },
  normal: {
    top: '-20px'
  },
  startToNormal:{
    top: '-20px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-60px',
        '-40px',
        to],
      times: [0, 0.3, 0.6, 1],
      duration: 1300
    })
  },
  normalToStart:{
    top: '-620px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-40px',
        '-20px',
        to],
      times: [0, 0.4, 0.7, 1],
      duration: 1300
    })
  }
})

const ResumeScrollAnimation = posed.img({
  roll: {
    height: '0px',
    transition: { duration: 500 }
  },
  unroll: {
    height: '100%',
    transition: { duration: 500 }
  }
})

const CenterBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CodeBirdChat = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`

const ResumeImage = styled(ResumeScrollAnimation)`
  width: 100%;
  margin: auto;
  object-fit: cover;
`

const ScrollImage = styled.img`
  width: 100%;
  height: 50px;
  position: relative;
  object-fit: cover;
`

const ChatContainer = styled.div`
  position: relative;
  width: 50%;
  left: 20px;
`

const CodBirdContainer = styled(CodeBirdAnimation)`
  position: relative;
  width: 200px;
  height: 180px;

  left: 20px;
`

const CardContainer = styled(CardAnimation)`
  position: relative;
`

//About me page
class About extends Component {
  //Chat information
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
      text: 'Anyway, when I was young I wanted to become an artist',
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
      text: 'I didn\'t really understand it at first',
      pose: 'normal'
    },{
      text: 'But there was this little bit of code already there that calculated the Quadratic formula',
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
      text: 'Take that as you will',
      pose: 'inquisitive'
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
      pose: 'inquisitive'
    }
  ]

  //For clearing timeouts
  timeoutArray = []

  //Saved states
  state = {
    chatIndex: 0,
    atEnd: false,
    flapping: true,
    animation: 'start',
    chatBubbleShow: false,
    resumeScroll: 'roll'
  }

  //Set state depending on which page we are currently on
  constructor (props) {
    super(props);
    if(props.page === '2') {
      this.state.animation = 'start'
    } else {
      this.state.animation = 'normal'
    }
  }

  //Make sure the scrool is in view
  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' })
  }

  //Update the scroll (resume) state
  UpdateResumeScroll = () => {
    if(this.state.resumeScroll === 'roll') {
      this.setState({resumeScroll: 'unroll'})
    } else {
      this.setState({resumeScroll: 'roll'})
    }
  }

  //Update which place the chat is currently in
  UpdateChatIndex = () => {
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

  //Update bird pose
  UpdateBirdPose = pose => {
    this.setState({birdPose: pose})
  }

  //Animation for entering page
  enterAnimation = () => {
    this.setState({animation: 'startToNormal'})
    this.timeoutArray.push(setTimeout(
      function() {
          this.setState({flapping: false})
          this.setState({chatBubbleShow: true})
      }
      .bind(this),
      1000
    ))
  }

  //Animation for exiting page
  exitAnimation = () => {
    this.setState({flapping: true})
    this.setState({chatBubbleShow: false})
    this.setState({animation: 'normalToStart'})
  }

  //Depending if it is leaving or entering page activate the correct animation
  componentDidMount(){
    if(this.props.page === '2') {
      this.enterAnimation()
    } else {
      this.exitAnimation()
    }
    this.scrollToBottom();
  }

  //Clear any timeouts if unmounted
  componentWillUnmount() {
    this.timeoutArray.forEach(clearTimeout);
  }

  componentDidUpdate() {
    this.timeoutArray.push(setTimeout(
      function() {
      this.scrollToBottom();
        }
        .bind(this),
        500
    ))
  }

  render() {
    return(
      <div>
        <h1>About Me</h1>
        <CenterBody>
          <CodeBirdChat>
            <ChatContainer>
              <ChatBubble hidden={!this.state.chatBubbleShow} atEnd={this.state.atEnd} text={this.chats[this.state.chatIndex].text} updateIndex={this.UpdateChatIndex}/>
            </ChatContainer>
            <CodBirdContainer pose={this.state.animation}>
              <CodeBird hidden={false} pose={this.chats[this.state.chatIndex].pose} flapping={this.state.flapping}/>
            </CodBirdContainer>
          </CodeBirdChat>
          <CardContainer pose={this.state.animation}>
            <ProfileCard/>
          </CardContainer>
          <ScrollImage ref={el => { this.el = el; }} onClick={this.UpdateResumeScroll} src={require("../../../images/scroll.png")}/>
          <ResumeImage pose={this.state.resumeScroll} onClick={this.UpdateResumeScroll} src={require("../../../images/resume.png")} alt="resume" />
        </CenterBody>
      </div>)
  }
}

export default About