import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import styled, {keyframes} from 'styled-components'


const LandingBody = styled.div`
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


class Landing extends Component {
  state = {
    opened: false
  }

  bellClicked = event => {
    console.log("RING!")
    this.setState({opened: true})
  }

  render() {
    const opened = this.state.opened

    return(
      <LandingBody id='LandingBody' className={opened ? 'LandingOpen' : 'LandingClosed'}>
        <ImageContainer>
          <BellBody>
            <Link to ='/Home' onClick={this.bellClicked}>
              <BellImg src={require('../../../images/bell.png')}/>
            </Link>
          </BellBody>
          <LandingImg src={require('../../../images/bird-house-outside.png')}/>
        </ImageContainer>
      </LandingBody>
    )
  }
}

export default Landing;