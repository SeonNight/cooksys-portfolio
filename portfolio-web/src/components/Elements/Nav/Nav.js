import React, { Component } from 'react'
import styled from 'styled-components'

import DelayLink from '../DelayLink/DelayLink'

const NavButton = styled.button`
  display: inline-block;
  background-color: rgb(75, 138, 255);
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 210px;
  padding: 15px 32px;
  border: none;
  &:hover {
    background-color: rgb(81, 84, 252);
  }
  &:active {
    background-color: rgb(206, 255, 249);
  }
`

class Nav extends Component {
  render() {
    return(
      <DelayLink to={this.props.link} delay={1500}>
        <NavButton value={this.props.value} onClick={this.props.handlePageChange}>
          {this.props.name}
        </NavButton>
      </DelayLink>
    )
  }
}
/*
class Nav extends Component {

    if(this.props.state === this.props.value) {
      return(
        <DelayLink to={this.props.link} delay={2000}>
          <NavButtonActive onClick={this.props.onClick} value={this.props.value}>{this.props.name}</NavButtonActive>
        </DelayLink>
      )
    } else {
      return(
        <DelayLink to={this.props.link} delay={2000}>
          <NavButton onClick={this.props.onClick} value={this.props.value}>{this.props.name}</NavButton>
        </DelayLink>
      )
    }
  }
}
*/
export default Nav;