import React, { Component } from 'react';
import styled from 'styled-components'
import ChatScreen from '../../Elements/ChatScreen/ChatScreen'
import CodeBird from '../../Elements/CodeBird/CodeBird'

const HomeBody = styled.div`
  width: 100%;
`
const ChatBody = styled.div`
  position: aboslute;
`

const ChatContainer = styled.div`
  position: relative;
  right: 50px;
`

const CodeBirdBody = styled.div`
  position: absolute;
`

const CodBirdContainer = styled.div`
  width: 150px;
  height: 130px;
  position: relative;
  z-index: 4;

  bottom: 80px;
  left: 400px;
`

class Home extends Component {
  chat = [{
    text: 'Hey there!',
    options: [],
    nextValue: 1,
    pose: 'happy'
  },{
    text: 'How can I help you?',
    options: [{
      text: 'About you',
      value: -2,
      link: '/About'
    },{
      text: 'Your Work',
      value: -2,
      link: '/Portfolio'
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
    birdHidden: false,
    birdPose: 'happy'
  }

  //Why does it have to be in this format?
  UpdateBirdPose = pose => {
    this.setState({birdPose: pose})
  }

  render() {
    return(
      <HomeBody>
        <ChatBody>
          <ChatContainer>
            <ChatScreen chatStart={[this.chat[0]]} chats={this.chat} updateBirdPose={this.UpdateBirdPose}/>
          </ChatContainer>
        </ChatBody>
        <CodeBirdBody>
          <CodBirdContainer>
            <CodeBird hidden={this.state.birdHidden} pose={this.state.birdPose}/>
          </CodBirdContainer>
        </CodeBirdBody>
      </HomeBody>
    )
  }
}
/*
        <p>I am a computer developer with a love of the arts</p>
        <p>Mainly pictures and animations</p>
        <p>Was never that into theater</p>
        <p>When I was young I believed I was going to be an artist</p>
        <p>I would always draw pictures at home and in class</p>
        <p>Don't tell my teachers that</p>
        <p>That was how it was</p>
        <p>Until one bored day in math class</p>
        <p>Did you know, graphic calculators can be programed?</p>
        <p>Took me a couple minutes, but I made my first program</p>
        <p>Adding TWO numbers together</p>
        <p>I've made more</p>
        <p>*ahem* 'Useful'</p>
        <p>Programs on it since then</p>
        <p>And instead of going into college for art</p>
        <p>I graduated with a Bachleor's degree in Computer Science</p>
        <p>Still got an animation minor</p>
        <p>Just because I learned that I loved Computer Science doesn't mean I suddenly disliked art</p>

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

export default Home