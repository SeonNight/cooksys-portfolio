import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components'

import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Nav from '../Elements/Nav/Nav'
import Landing from '../Pages/Landing/Landing'
import ActiveRoute from './ActiveRoute'


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
  z-index: 2;
`
const NavButtonDistribution = styled.div`
  width:630px;
  display: flex;
  justify-content: center;
`

class App extends Component {

  state = {
    page: '0',
    refreshed: false
  }


  //Handling page change by page value
  handlePageChangeValue = page => {
    this.setState({page: page})
  };

  //Handling page change by event
  handlePageChangeEvent = event => {
    this.handlePageChangeValue(event.target.value)
  };

  //For identifing if this is the current page on refresh and reload
  handlePageChangeFlag = page => {
    this.setState({refreshed: true})
    this.setState({page: page})
  }

  render() {
    return(
      <Router>
        <div>
          <BackgroundImage src={require("../../images/bird-house-inside.png")} alt="link"/>
          <NavBody>
            <NavButtonDistribution handlePageChange={this.handlePageChangeValue}>
              <Nav name='Home' value='1' link='/Home' handlePageChange={this.handlePageChangeEvent} />
              <Nav name='About Me' value='2' link='/About' handlePageChange={this.handlePageChangeEvent} />
              <Nav name='Portfolio' value='3' link='/Portfolio' handlePageChange={this.handlePageChangeEvent} />
            </NavButtonDistribution>
          </NavBody>
          <Route path="/" exact component={() => <Landing page={this.state.page} value='0' handlePageChange={this.handlePageChangeValue} />}/>
          <AppBody>
            <AppContent>
              <ActiveRoute refreshed={this.state.refreshed} page={this.state.page} handlePageChangeFlag={this.handlePageChangeFlag}>
                <Route path="/Home" component={() => <Home page={this.state.page} value='1' handlePageChange={this.handlePageChangeEvent} />}/>
                <Route path="/About" component={() => <About page={this.state.page} value='2' handlePageChange={this.handlePageChangeValue} />}/>
                <Route path="/Portfolio" component={() => <Portfolio page={this.state.page} value='3' handlePageChange={this.handlePageChangeValue} />}/>
              </ActiveRoute>
            </AppContent>
          </AppBody>
        </div>
      </Router>
    )
  }
}

export default App;