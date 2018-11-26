import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import posed from "react-pose";
import styled from 'styled-components'
import ChatScreen from '../../Elements/ChatScreen/ChatScreen'
import CodeBird from '../../Elements/CodeBird/CodeBird'


const ChatScreenAnimation = posed.div({
  start: {
    top: '-500px'
  },
  normal: {
    top: '10px'
  },
  startToNormal: {
    top: '10px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from, 100, -50, to],
      times: [0, 0.4, 0.7, 1],
      duration: 1000
    })
  },
  normalToStart: {
    top: '-500px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from, -50, 100, to],
      times: [0, 0.3, 0.6, 1],
      duration: 1000
    })
  }
})

const CodeBirdAnimation = posed.div({
  start: {
    bottom: '700px'
  },
  normal: {
    bottom: '80px'
  },
  startToNormal:{
    bottom: '80px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '100px',
        '90px',
        to],
      times: [0, 0.3, 0.6, 1],
      duration: 1300
    })
  },
  normalToStart:{
    bottom: '700px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '90px',
        '80px',
        to],
      times: [0, 0.4, 0.7, 1],
      duration: 1300
    })
  }
})

const HomeBody = styled.div`
  width: 100%;
`
const ChatBody = styled.div`
  position: aboslute;
`

const ChatContainer = styled(ChatScreenAnimation)`
  position: relative;
  right: 50px;
`

const CodeBirdBody = styled.div`
  position: absolute;
`

const CodBirdContainer = styled(CodeBirdAnimation)`
  width: 150px;
  height: 130px;
  position: relative;
  z-index: 4;

  bottom: 80px;
  left: 400px;
`

class Home extends Component {
  chats = [
    {
      text: 'Hey there!',
      options: [],
      nextValue: 1,
      pose: 'happy'
    },{
    text: 'How can I help you?',
    options: [{
      text: 'About you',
      value: -2,
      link: '/About',
      page: '2'
    },{
      text: 'Your Work',
      value: -2,
      link: '/Portfolio',
      page: '3'
    },{
      text: 'Are you actually a bird?',
      value: 2
    },{
      text: 'Bye',
      value: 12
    }],
    nextValue: -1,
    pose: 'normal'
  },{
    text: 'No, it\'s just easier to animate a bird than a human',
    options: [{
      text: 'Okay',
      value: 1
    },{
      text: 'Are you sure you\'re not a bird?',
      value: 3
    }],
    nextValue: -1,
    pose: 'inquisitive'
  },{
    text: 'Yes, I am not a bird',
    options: [{
      text: 'Okay',
      value: 1
    },{
      text: 'Are you REALLY sure?',
      value: 4
    }],
    nextValue: -1,
    pose: 'normal'
  },{
    text: 'Yes, really',
    options: [{
      text: 'Okay',
      value: 1
    },{
      text: 'Really? Really?',
      value: 5
    }],
    nextValue: -1,
    pose: 'normal'
  },{
    text: 'Yes, I am not a bird',
    options: [{
      text: 'Okay',
      value: 1
    },{
      text: 'Really? Really? Really?',
      value: 6
    }],
    nextValue: -1,
    pose: 'dotdotdot'
  },{
    text: 'I am not a bird',
    options: [{
      text: 'Okay',
      value: 1
    },{
      text: 'I\'m pretty sure you\'re a bird',
      value: 7
    }],
    nextValue: -1,
    pose: 'dotdotdot'
  },{
    text: 'I\'m NOT a bird',
    options: [{
      text: 'Okay',
      value: 1
    },{
      text: 'Yes, you are, your flapping your wings right in front of me',
      value: 8
    }],
    nextValue: -1,
    pose: 'angry'
  },{
    text: '...',
    options: [],
    nextValue: 9,
    pose: 'dotdotdot'
  },{
    text: '...',
    options: [],
    nextValue: 10,
    pose: 'dotdotdot'
  },{
    text: '...',
    options: [],
    nextValue: 11,
    pose: 'dotdotdot'
  },{
    text: '...',
    options: [],
    nextValue: 0,
    pose: 'dotdotdot'
  },{
    text: 'Need to go?',
    options: [],
    nextValue: 13,
    pose: 'questioning'
  },{
    text: 'Well, I hope to see you soon!',
    options: [],
    nextValue: -2,
    pose: 'happy'
  }]

  state = {
    birdPose: 'happy',
    flapping: true,
    chatPose: 'start',
    screenOn: false
  }

  constructor (props) {
    super(props);
    if(props.page === '1') {
      this.state.chatPose = 'start'
    } else {
      this.state.chatPose = 'normal'
    }
  }

  //Why does it have to be in this format?
  UpdateBirdPose = pose => {
    this.setState({birdPose: pose})
  }

  enterAnimation = () => {
    this.setState({chatPose: 'startToNormal'})
    setTimeout(
      function() {
          this.setState({flapping: false})
          this.setState({screenOn: true})
      }
      .bind(this),
      2000
    )
    this.setState({open: true})
  }

  exitAnimation = () => {
    this.setState({flapping: true})
    this.setState({screenOn: false})
    this.setState({chatPose: 'normalToStart'})
    let link = {
      '0' : '/',
      '1' : '/Home',
      '2' : '/About',
      '3' : '/Portfolio'
    }
    setTimeout(
      function(link) {
        this.props.history.push(link)
      }
      .bind(this),
      2000,
      link[this.props.page]
    )
  }

  componentDidMount(){
    if(this.props.page === '1') {
      this.enterAnimation()
    } else {
      this.exitAnimation()
    }
  }

  render() {
    return(
      <HomeBody>
        <ChatBody>
          <ChatContainer pose={this.state.chatPose}>
            <ChatScreen screenOn={this.state.screenOn} handlePageChange={this.props.handlePageChange} chatStart={[this.chats[0]]} chats={this.chats} updateBirdPose={this.UpdateBirdPose}/>
          </ChatContainer>
        </ChatBody>
        <CodeBirdBody>
          <CodBirdContainer pose={this.state.chatPose}>
            <CodeBird hidden={false} pose={this.state.birdPose} flapping={this.state.flapping}/>
          </CodBirdContainer>
        </CodeBirdBody>
      </HomeBody>
    )
  }
}
/*
      <HomeBody>
        <ChatBody>
          <ChatContainer pose={this.state.chatPose}>
            <ChatScreen changePage={this.handlePageChange} chatStart={[this.chats[0]]} chats={this.chats} updateBirdPose={this.UpdateBirdPose}/>
          </ChatContainer>
        </ChatBody>
        <CodeBirdBody>
          <CodBirdContainer pose={this.state.chatPose}>
            <CodeBird hidden={this.state.birdHidden} pose={this.state.birdPose} flapping={this.state.flapping}/>
          </CodBirdContainer>
        </CodeBirdBody>
      </HomeBody>
        <p>These are my previous projects and works</p>

        <p>Filing Sharing</p>
        <p>Simple command-line program</p>
        <p>You can send a file into a database</p>
        <p>With a password and amount of times it can be downloaded</p>
        <p>Social Media</p>
        <p>A pseudo twitter thingy</p>
        <p>No real front-end, but still works</p>
        <p>With user creation and deletion</p>
        <p>Posts, reposts, comments, likes, and such</p>
        <p>Developer Duel</p>
        <p>I like this one</p>
        <p>Using GitHub API, I got profile data of the name that was typed in</p>
        <p>You can also get two people and then let them battle each other</p>
        <p>And this one has actual front-end prettiness</p>
      </div> */

export default withRouter(Home)