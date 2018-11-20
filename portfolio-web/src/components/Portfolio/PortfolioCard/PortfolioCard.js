import React, { Component } from 'react';

import styled from 'styled-components'

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
`

const GitLink = styled.a`
  margin: auto;
`
const GitImg = styled.img`
  width: 20px;
`

class PortfolioCard extends Component {
  render() {
    return (
      <Card>
        <Content>
          <h1>Title</h1>
          <img src={this.props.imgLink} alt="snapshot of the project"/>
          <p>Short description</p>
          <GitLink href={this.props.link}><GitImg src={require("../../../images/GitHub-Mark-32px.png")} alt="link"/></GitLink>
        </Content>
      </Card>
    )
  }
}

export default PortfolioCard