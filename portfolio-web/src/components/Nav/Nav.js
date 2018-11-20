import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import styled from 'styled-components'

const NavButton = styled.button`
  display: inline-block;
  background-color: rgb(75, 138, 255);
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  padding: 15px 32px;
  border: none;
  &:hover {
    background-color: rgb(81, 84, 252);
  }
  &:active {
    background-color: rgb(206, 255, 249);
  }
  @media screen (min-width: 650px) {
    width:30%;
  }
`
const NavButtonActive = styled.button`
  display: inline-block;
  background-color: rgb(32, 85, 182);
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  padding: 15px 32px;
  border: none;
  &:hover {
    background-color: rgb(52, 54, 194);
  }
  &:active {
    background-color: rgb(206, 255, 249);
  }
  @media screen (min-width: 650px) {
    width:30%;
  }
`

class Nav extends Component {

  render() {
    if(this.props.state === this.props.value) {
      return(
        <Link to ={this.props.link}>
          <NavButtonActive onClick={this.props.onClick} value={this.props.value}>{this.props.name}</NavButtonActive>
        </Link>
      )
    } else {
      return(
        <Link to ={this.props.link}>
          <NavButton onClick={this.props.onClick} value={this.props.value}>{this.props.name}</NavButton>
        </Link>
      )
    }
  }
}

export default Nav;