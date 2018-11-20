import React, { Component } from 'react';
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
  border-bottom: solid 2px rgb(0, 89, 253);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`
const NavButtonDistribution = styled.div`
  width:650px;
  display: flex;
  justify-content: left;
`

class App extends Component {

  state = {
    page: '0'
  }

  handleClick = event => {
    this.setState({page: event.target.value})
  };

  render() {
    return(
      <Router>
        <div>
          <NavBody>
            <NavButtonDistribution>
              <Nav name='Home' onClick={this.handleClick} state={this.state.page} value='1' link='/Home'/>
              <Nav name='About Me' onClick={this.handleClick} state={this.state.page} value='2' link='/About'/>
              <Nav name='Portfolio' onClick={this.handleClick} state={this.state.page} value='3' link='/Portfolio'/>
            </NavButtonDistribution>
          </NavBody>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <AppBody>
              <AppContent>
                <Route path="/Home" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Portfolio" component={Portfolio}/>
              </AppContent>
            </AppBody>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;