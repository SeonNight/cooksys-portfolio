import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

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
      duration: 700,
      ease: 'easeIn'
    }
  }
})

const ImageMove = posed.div({
  normal: {
    top: 0,
    transition: {
      duration: 500,
      ease: 'easeIn'
    }
  },
  trans: {
    top: 50,
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


class Landing extends Component {
  state = {
    closing: false,

    ringed: false,
    moveImage: false,
    moveBlind: false,
    animationIndex: 0,
    animationQueue: [
      {moveImage: true},
      {moveBlind: true}
    ]
  }

  bellClicked = () => {
    //If first time rining start the ring aniamtion
    if(!this.state.ringed) {
      this.props.handlePageChange('1')
    }
  }

  componentDidMount() {
    if(this.props.page !== '0') {
      this.setState({ringed: true})
      setTimeout(
        function() {
          this.props.history.push('/Home')
        }
        .bind(this),
        2000
      )
    }
  }

  //Make sure verything is done in sequence
  componentDidUpdate() {
    if(this.state.ringed) {
      if(this.state.animationIndex < this.state.animationQueue.length) {
        this.setState(this.state.animationQueue[this.state.animationIndex])
        this.setState({animationIndex: this.state.animationIndex + 1})
      }
    }
  }

  render() {
    return(
      <LandingBody id='LandingBody' pose={this.state.moveBlind ? 'open' : 'close'} ref={el => { this.el = el; }} >
        <ImageContainer pose={this.state.moveImage ? 'trans' : 'normal'}>
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

//<LandingBody id='LandingBody'pose={opened ? 'open' : 'closed'}  className={opened ? 'LandingOpen' : 'LandingClosed'}>
export default withRouter(Landing);