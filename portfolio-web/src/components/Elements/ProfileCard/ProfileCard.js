import React, { Component } from 'react';

import styled from 'styled-components'

import faceImage from '../../../images/profile-icon.png';

const ProfileCardBody = styled.div`
  width: 420px;
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
  color: rgb(85, 85, 85);
  padding: 10px;
  padding-top: 0px;
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

//Profile Card with basic info
class ProfileCard extends Component {

  render() {
    return(
      <ProfileCardBody>
        <ProfileTop>
          <div>
            <ProfileImage src={faceImage} alt='Human Face'/>
            <ProfileText>ID: 43110</ProfileText>
          </div>
          <ProfileStatsList>
            <StatText><StatBold>Name:</StatBold> Seong Kim</StatText>
            <StatText><StatBold>Type:</StatBold> Asian</StatText>
            <StatText><StatBold>Age:</StatBold> 154 dog years</StatText>
            <StatText><StatBold>Height:</StatBold> 4.5 jumps</StatText>
            <StatText> <StatBold>Weight:</StatBold> 0.08 unicorns</StatText>
            <StatText><StatBold>Favorite Food:</StatBold> Noodles</StatText>
          </ProfileStatsList>
        </ProfileTop>
        <ProfileText>
          <p>A lover of art and puzzles. Don't leave candy around this creature as they always seem to mysteriously disappear.</p>
        </ProfileText>
      </ProfileCardBody>
    )
  }
}

export default ProfileCard;