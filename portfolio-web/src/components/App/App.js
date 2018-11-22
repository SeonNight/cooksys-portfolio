import React, { Component } from 'react';
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Nav from '../Elements/Nav/Nav'
import Landing from '../Pages/Landing/Landing'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import styled from 'styled-components'


const BackgroundImage = styled.img `
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: -2;
  opacity: 0.7;
  filter: blur(1.5px);
`

const AppBody = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const AppContent = styled.div`
  max-width:600px;
  padding: 20px;
  background-color: rgb(229, 237, 240, 0.5);
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
          <BackgroundImage src={require("../../images/bird-house-inside.png")} alt="link"/>
          <NavBody>
            <NavButtonDistribution>
              <Nav name='Home' onClick={this.handleClick} state={this.state.page} value='1' link='/Home'/>
              <Nav name='About Me' onClick={this.handleClick} state={this.state.page} value='2' link='/About'/>
              <Nav name='Portfolio' onClick={this.handleClick} state={this.state.page} value='3' link='/Portfolio'/>
            </NavButtonDistribution>
          </NavBody>
            <Route path="/" exact component={Landing}/>
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
//Get rid of exact after testing
/*
<Switch>
  <Route path="/" exact component={Landing}/>
  <AppBody>
    <AppContent>
      <Route path="/Home" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Portfolio" component={Portfolio}/>
    </AppContent>
  </AppBody>
</Switch>*/

export default App;