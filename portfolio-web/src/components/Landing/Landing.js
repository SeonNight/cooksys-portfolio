import React, { Component } from 'react';

import styled from 'styled-components'


const LandingBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 2;
`

const LandingAnchor =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: solid 1px black;
`

const LandingImg = styled.img`
  width: 100%;
  object-fit: contain;
  
  border: solid 1px black;
`

const BellBody = styled.div`
  width: 10%;
  position: absolute;
  z-index: 4;

  object-fit: contain;

  border: solid 1px black;
`

const BellImg = styled.img`
  width: 100%;
  object-fit: contain;
  
  border: solid 1px black;
`
const BellButton = styled.button`
  display: inline-block;
  background-color: rgb(0,0,0,0);
  text-decoration: none;
  border: none;
  &:focus {
    outline: 0;
  }
  
  width: 100%;
  object-fit: contain;
  
  border: solid 1px black;
`

class Landing extends Component {

  bellClicked = event => {
    console.log("RING!")
  }

  render() {
    return(
      <LandingBody>
        <LandingAnchor>
          <BellBody>
            <BellButton onClick={this.bellClicked}>
              <BellImg src={require('../../images/bell.png')}/>
            </BellButton>
          </BellBody>
          <LandingImg src={require('../../images/bird-house-outside.png')}/>
        </LandingAnchor>
      </LandingBody>
    )
  }
}

//<LandingImg src={require('../../images/bird-house-outside.png')}/>
export default Landing;