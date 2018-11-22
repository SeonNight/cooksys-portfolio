import React, { Component } from 'react';

import styled from 'styled-components'


import fileShare from '../../../../images/file-share.PNG';
import socialMedia from '../../../../images/social-media.PNG';
import devDuel from '../../../../images/dev-duel-dueling.PNG';

const Card = styled.div`
  width: 450px;
  height: 300px;
  background: white;
  border: none;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 10px;

  transition: transform .2s;

  &:hover {
    box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

const PreviewImage = styled.img`
  width: 99%;
  margin: auto;
  height: 100px;
  object-fit: cover;

  box-shadow: 0px 1px 0.5px lightGrey, 0.5px -1px 0px lightGrey;
`

const GitLink = styled.a`
  margin: auto;
  text-decoration: none;
  color: black;
  &:hover {
  }
  &:active {

  }
  &:visited {

  }
`
const GitImg = styled.img`
  width: 20px;
`

class PortfolioCard extends Component {
  getImage = (id) => {
    switch(id) {
      case 1:
        return fileShare
      case 2:
        return socialMedia
      case 3:
        return devDuel
      default:
        break
    }
  }

  render() {
    return (
      <Card>
        <GitLink href={this.props.link}>
          <Content>
            <h1>{this.props.name}</h1>
            <PreviewImage src={this.getImage(this.props.imgLink)} alt="snapshot of the project"/>
            <p>{this.props.description}</p>
            <Content><GitImg src={require("../../../../images/GitHub-Mark-32px.png")} alt="link"/></Content>
          </Content>
        </GitLink>
      </Card>
    )
  }
}
//<PreviewImage src={this.getImage(this.props.imgLink)} alt="snapshot of the project"/>

export default PortfolioCard