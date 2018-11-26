import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import styled from 'styled-components'

import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Nav from '../Elements/Nav/Nav'
import Landing from '../Pages/Landing/Landing'


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
    console.log('Switching Pages: ' + event.target.value)
    this.setState({page: event.target.value})
  };

  //For non Nav page change
  handlePageChange = page => {
    console.log('Switching Pages: ' + page)
    this.setState({page: page})
  };

  componentDidMount(){
    console.log("Main Mounted")
  }

  componentDidUpdate() {
    console.log("Main Update: " + this.state.page)
  }

  render() {
    return(
      <Router>
        <div>
          <BackgroundImage src={require("../../images/bird-house-inside.png")} alt="link"/>
          <NavBody>
            <NavButtonDistribution>
              <Nav name='Home' value='1' link='/Home' handlePageChange={this.handleClick} />
              <Nav name='About Me' value='2' link='/About' handlePageChange={this.handleClick} />
              <Nav name='Portfolio' value='3' link='/Portfolio' handlePageChange={this.handleClick} />
            </NavButtonDistribution>
          </NavBody>
            <Route path="/" exact component={() => <Landing page={this.state.page} value='0' handlePageChange={this.handlePageChange} />}/>
            <AppBody>
              <AppContent>
                <Route path="/Home" component={() => <Home page={this.state.page} value='1' handlePageChange={this.handleClick} />}/>
                <Route path="/About" component={() => <About page={this.state.page} value='2' handlePageChange={this.handlePageChange} />}/>
                <Route path="/Portfolio" component={() => <Portfolio page={this.state.page} value='3' handlePageChange={this.handlePageChange} />}/>
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