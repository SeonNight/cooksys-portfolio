import React, { Component } from 'react';

import styled from 'styled-components'

import faceImage from '../../../images/profile-icon.png';

const ProfileCardBody = styled.div`
  width: 380px;
  height: 230px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px grey;
`

const ProfileTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const ProfileStatsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px;
`

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`

const ProfileText = styled.div`
  color: grey;
  padding: 10px;
`

const StatText = styled.p`
  margin: 0;
  padding: 0;
`
const StatBold = styled.span`
  font-weight: bold;
  margin: 0;
  padding: 0;
`

class ProfileCard extends Component {

  render() {
    return(
      <ProfileCardBody>
        <ProfileTop>
          <ProfileImage src={faceImage} alt='Human Face'/>
          <ProfileStatsList>
            <StatText><StatBold>Name:</StatBold> Seong Kim</StatText>
            <StatText><StatBold>Age:</StatBold> 154 dog years old</StatText>
            <StatText><StatBold>Height:</StatBold> 6 Jumps</StatText>
            <StatText> <StatBold>Weight:</StatBold> 10 unicorns </StatText>
            <StatText><StatBold>Favorite Food:</StatBold> Noodles</StatText>
          </ProfileStatsList>
        </ProfileTop>
        <ProfileText>
          <p>A lover of art and puzzles. Don't leave candy around this creature unless you want them disappear mysteriously.</p>
        </ProfileText>
      </ProfileCardBody>
    )
  }
}

export default ProfileCard;