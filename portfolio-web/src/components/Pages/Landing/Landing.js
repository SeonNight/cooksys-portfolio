import React, { Component } from 'react';

import DelayLink from '../../Elements/DelayLink/DelayLink'

import styled, {keyframes} from 'styled-components'
import posed from "react-pose";

const Blinds = posed.div({
  close: {
    top: 0,
    transition: {
      duration: 500,
      ease: 'easeIn'
    }
  },
  open: {
    top: -1000,
    transition: {
      duration: 500,
      ease: 'easeIn'
    }
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

const ImageContainer = styled.div`
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

class Landing extends Component {
  state = {
    status: 0,
    opened: false,
    opening: false,
    birdOut: false,
    closing: false,
    animationQueue: [],
    currentAnimation: []
  }

  bellClicked = event => {
    console.log("RING!")
    //If ti isn't already opening and stuff
    if(!(this.state.opening || this.state.opened)) {
      this.setState({opened: true})
      this.setState({opening: true})
    }
  }

  componentDidUpdate() {
  }

  animateOpen() {

  }
  animateClose() {

  }

  render() {
    const opened = this.state.opened

    return(
      <LandingBody id='LandingBody' pose={opened ? 'open' : 'close'} ref={el => { this.el = el; }} >
        <ImageContainer>
          <BellBody>
            <DelayLink to ='/Home' onClick={this.bellClicked} delay={2000}>
              <BellImg src={require('../../../images/bell.png')}/>
            </DelayLink>
          </BellBody>
          <LandingImg src={require('../../../images/bird-house-outside.png')}/>
        </ImageContainer>
        <HangingBird style={this.state.opening? {height: '180px', bottom: '-182px'} : {height: '0',bottom: '0px'}} src={require('../../../images/code-bird/code-bird-hanging.png')} alt='bird_handing'/>
      </LandingBody>
    )
  }
}

//<LandingBody id='LandingBody'pose={opened ? 'open' : 'closed'}  className={opened ? 'LandingOpen' : 'LandingClosed'}>
export default Landing;