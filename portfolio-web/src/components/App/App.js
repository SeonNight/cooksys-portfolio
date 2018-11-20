import React, { Component } from 'react';
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import styled from 'styled-components'

const AppBody = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const AppContent = styled.div`
  max-width:600px;
  padding: 20px;
  background-color: rgb(229, 237, 240);
`
const NavBody = styled.div`
  background-color: rgba(255, 255, 255, 0.575);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`
const NavButtonDistribution = styled.div`
  width:600px;
  display: flex;
  justify-content: space-around;
`

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
  &:focus {
    background-color: rgb(27, 80, 255);
  }
`

class App extends Component {
  
  state = {
    page: '0'
  }

  handleClick = event => {
    event.target.classList.add('clickedState')
    this.setState({page: event.target.value})
  };

  render() {
    return(
      <Router>
        <div>
            <NavBody>
              <NavButtonDistribution>
                <Link to ='/Home'>
                  <NavButton onClick={this.handleClick} value='0'>Home</NavButton>
                </Link>
                <Link to ='/About'>
                  <NavButton onClick={this.handleClick} value='1'>About Me</NavButton>
                </Link>
                <Link to ='/Portfolio'>
                  <NavButton onClick={this.handleClick} value='2'>My Work</NavButton>
                </Link>
              </NavButtonDistribution>
            </NavBody>
            <AppBody>
              <AppContent>
                <Route path="/Home" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Portfolio" component={Portfolio}/>
              </AppContent>
            </AppBody>
        </div>
      </Router>
    )
  }
}

export default App;