import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import posed from "react-pose";

const Blinds = posed.div({
  start: {
    top: '-1000px'
  },
  normal: {
    top: '0px'
  },
  startToNormal:{
    top: '0px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-1000px',
        to],
      times: [0, 0.5, 1],
      duration: 2200
    })
  },
  normalToStart:{
    top: '-1000px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '0px',
        to],
      times: [0, 0.5, 1],
      duration: 1300
    })
  }
})

const ImageMove = posed.div({
  start: {
    top: '50px'
  },
  normal: {
    top: '0px'
  },
  startToNormal:{
    top: '0px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '50px',
        to],
      times: [0, 0.3, 1],
      duration: 2200
    })
  },
  normalToStart:{
    top: '50px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '50px',
        to],
      times: [0, 0.7, 1],
      duration: 1300
    })
  }
})

const LandingBody = styled(Blinds)`
  width: 100%;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 2;
`

const ImageContainer = styled(ImageMove)`
  width: 700px;
  height: 750px;
  position: relative;
  top: 0;
`

const LandingImg = styled.img`
  width: 700px;
`

const BellIdleAnimation = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(5px, 0px) rotate(-10deg);
  }
  40% {
    transform: translate(2px, 0px) rotate(-2deg);
  }
  70% {
    transform: translate(9px, -1px) rotate(-20deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
`

const BellBody = styled.div`
  width: 50px;
  position: absolute;
  z-index: 4;
  top: 294px;
  left: 315px;

  animation: ${BellIdleAnimation} 8s linear infinite;
`

const BellImg = styled.img`
  width: 100%;
  object-fit: contain;
`

const HangingBird = styled.img`
  position: absolute;
  z-index: 2;
`

//Landing page
class Landing extends Component {
  state = {
    animation: 'start',
    moveImage: false
  }

  //For clearing timeouts
  timeoutArray = []

  //Set state depending on which page we are currently on
  constructor (props) {
    super(props);
    //IF starting on landing
    if(props.page === props.prev && props.page === '0') {
      this.state.animation = 'normal'
    } else if(props.prev === '0') {
      this.state.animation = 'normal'
    } else {
    //Screw you
      this.state.animation = 'start'
    }
  }


  //If clicked ring bell and activate page change
  bellClicked = () => {
    //If first time rining start 
    if(this.props.page === '0') {
      this.props.handlePageChange('1')
    }
  }

  //Animation for entering page
  enterAnimation = () => {
    this.setState({animation: 'startToNormal'})
    this.setState({moveImage: true})
    setTimeout(
      function() {
        this.setState({moveImage: false})
      }
      .bind(this),
      2000
    )
  }

  //Animation for exiting page
  exitAnimation = () => {
    this.setState({animation: 'normalToStart'})
    this.setState({moveImage: true})
    setTimeout(
      function() {
        this.props.history.push('/Home')
      }
      .bind(this),
      2000
    )
  }

  //Depending if it is leaving or entering page activate the correct animation
  componentDidMount(){
    if(this.props.prev === '0' && this.props.page !== '0') {
      //Switching pages from landing
      this.exitAnimation()
    } else if(this.props.prev !== '0' && this.props.page === '0') {
      //From home to landing
      this.enterAnimation()
    }
  }

  //Clear any timeouts if unmounted
  componentWillUnmount() {
    this.timeoutArray.forEach(clearTimeout);
  }

  render() {
    return(
      <LandingBody id='LandingBody' pose={this.state.animation} ref={el => { this.el = el; }} >
        <ImageContainer pose={this.state.animation}>
          <BellBody>
            <BellImg value='1' onClick={this.bellClicked} src={require('../../../images/bell.png')}/>
          </BellBody>
          <LandingImg src={require('../../../images/bird-house-outside.png')}/>
        </ImageContainer>
        <HangingBird style={this.state.moveImage? {height: '180px', bottom: '-182px'} : {height: '0',bottom: '0px'}} src={require('../../../images/code-bird/code-bird-hanging.png')} alt='bird_handing'/>
      </LandingBody>
    )
  }
}
//<ImageContainer pose={this.state.animation}>

//<LandingBody id='LandingBody'pose={opened ? 'open' : 'closed'}  className={opened ? 'LandingOpen' : 'LandingClosed'}>
export default withRouter(Landing);