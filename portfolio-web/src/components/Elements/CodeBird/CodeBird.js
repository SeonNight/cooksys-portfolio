import React, { Component } from 'react';
import posed from "react-pose";

import styled, {keyframes} from 'styled-components'

import angry from '../../../images/code-bird/code-bird-angry.png';
import dotdotdot from '../../../images/code-bird/code-bird-dotdotdot.png';
import happy from '../../../images/code-bird/code-bird-happy.png';
import inquisitive from '../../../images/code-bird/code-bird-inquisitive.png';
import normal from '../../../images/code-bird/code-bird-normal.png';
import questioning from '../../../images/code-bird/code-bird-questioning.png';

import wing from '../../../images/code-bird/code-bird-wing.png';


const CodeBirdAnimation = posed.div({
  hidden: {
    width: 0
  },
  show: {
    width: '100%'
  },
  in: {
    height: '110%'
  },
  out: {
    height: '90%'
  },
  base: {
    height: '100%'
  }
})

const CodeBirdContainer = styled(CodeBirdAnimation)`
  width: 100%;
  height: 100%;
`

const CodeBirdImage = styled.img`
  position: relative;

  width: 100%;
  
  -webkit-filter: drop-shadow(2x 5px 5px rgb(73, 73, 73));
  filter: drop-shadow(2px 5px 5px rgb(73, 73, 73));
`
const CodeBirdWingImageBody = styled.div`
  position: relative:
`

const CodeBirdWingIdle = keyframes`
  0%{
    transform: translate(0px, 0px) rotate(-20deg);
  }
  30%{
    transform: translate(0px, 0px) rotate(-20deg);
  }
  31%{
    transform: translate(-1px, -4px) rotate(-30deg);
  }
  32%{
    transform: translate(0px, 0px) rotate(-20deg);
  }
  97% {
    transform: translate(0px, 0px) rotate(-20deg);
  }
  98% {
    transform: translate(-1px, -4px) rotate(-25deg);
  }
  99% {
    transform: translate(1px, 4px) rotate(-10deg);
  }
  100%{
    transform: translate(0px, 0px) rotate(-20deg);
  }
`

const CodeBirdFlapAnimation = keyframes`
  0%{
    transform: translate(-20px, -30px) rotate(-90deg) scaleX(1);
  }
  50%{
    transform: translate(-20px, 30px) rotate(-90deg) scaleX(-1);
  }
  100%{
    transform: translate(-20px, -30px) rotate(-90deg) scaleX(1);
  }
`

const CodeBirdFlap = styled.img`
  position: absolute;
  top: 40%;

  animation: ${CodeBirdFlapAnimation} .3s linear infinite;
  z-index: 1;

  width: 55%;

  perspective: 1000px;
`

const CodeBirdWingImage = styled.img`
  position: absolute;
  top: 40%;

  animation: ${CodeBirdWingIdle} 7s linear infinite;
  z-index: 1;

  width: 50%;

  perspective: 1000px;
`

class CodeBird extends Component {
  state = {
    pose: 'normal',
    hidden: true
  }

  WhichPose(id) {
    switch(id) {
      default:
      case 'normal':
        return normal
      case 'happy':
        return happy
      case 'dotdotdot':
        return dotdotdot
      case 'angry':
        return angry
      case 'inquisitive':
        return inquisitive
      case 'questioning':
        return questioning
    }

  }

  render() {
    if(this.props.flapping) {
      return(
        <CodeBirdContainer pose={this.props.hidden? 'hidden' : 'show'}>
          <CodeBirdWingImageBody>
            <CodeBirdFlap src={wing} alt="bird wing"/>
          </CodeBirdWingImageBody>
          <CodeBirdImage src={this.WhichPose(this.props.pose)} alt="codebird"/>
        </CodeBirdContainer>
      )
    } else {
      return(
        <CodeBirdContainer pose={this.props.hidden? 'hidden' : 'show'}>
          <CodeBirdWingImageBody>
            <CodeBirdWingImage src={wing} alt="bird wing"/>
          </CodeBirdWingImageBody>
          <CodeBirdImage src={this.WhichPose(this.props.pose)} alt="codebird"/>
        </CodeBirdContainer>
      )
    }
  }
}

export default CodeBird;