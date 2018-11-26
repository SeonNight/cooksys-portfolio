import React, { Component } from 'react';
import posed from "react-pose";
import styled from 'styled-components'

import PortfolioCard from './PortfolioCard/PortfolioCard'
import CodeBird from '../../Elements/CodeBird/CodeBird'

const CodeBirdAnimation = posed.div({
  start: {
    top: '-300px'
  },
  normal: {
    top: '15px'
  },
  startToNormal:{
    top: '15px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-300px',
        '0px',
        to],
      times: [0, 0.4, 0.8, 1],
      duration: 1300
    })
  },
  normalToStart:{
    top: '-300px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '5px',
        '25px',
        to],
      times: [0, 0.4, 0.7, 1],
      duration: 1300
    })
  }
})

const PortfolioAnimation = posed.div({
  start: {
    top: '-1300px'
  },
  normal: {
    top: '0px'
  },
  startToNormal:{
    top: '0px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-20px',
        to],
      times: [0, 0.7, 1],
      duration: 1300
    })
  },
  normalToStart:{
    top: '-1300px',
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from,
        '-20px',
        '0px',
        to],
      times: [0, 0.4, 0.7, 1],
      duration: 1300
    })
  }
})

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const CodeBirdContainer = styled(CodeBirdAnimation)`
  position: relative;
  width: 100px;
  height: 90px;
`

const PortfolioContainer = styled(PortfolioAnimation)`
  position: relative;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

const CardAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

//Portfolio page
class Portfolio extends Component {
  state = {
    cardInfo: [
      {
        name: 'Smart Share',
        link: 'https://github.com/cooksystemsinc/java-assessment-smart-share-SeonNight.git',
        description: 'Sharing files using a database',
        imgLink: 1
      },
      {
        name: 'Social Media',
        link: 'https://github.com/cooksystemsinc/social-media-assessment-SeonNight.git',
        description: 'Psudeo Twitter',
        imgLink: 2
      },
      {
        name: 'Dev Duel',
        link: 'https://github.com/cooksystemsinc/js-assessment-dev-duel-SeonNight.git',
        description: 'Webpage displaying data from GitHub API and dueling them together',
        imgLink: 3
      }
    ],
    page: 0,
    animation: 'start',
    flapping: true
  }

  //For clearing timeouts
  timeoutArray = []

  //Set state depending on which page we are currently on
  constructor (props) {
    super(props);
    if(props.page === '3') {
      this.state.animation = 'start'
    } else {
      this.state.animation = 'normal'
    }
  }

  //Animation for entering page
  enterAnimation = () => {
    this.setState({animation: 'startToNormal'})
    this.timeoutArray.push(setTimeout(
      function() {
          this.setState({flapping: false})
      }
      .bind(this),
      1000
    ))
  }

  //Animation for exiting page
  exitAnimation = () => {
    this.setState({flapping: true})
    this.setState({animation: 'normalToStart'})
  }

  //Depending if it is leaving or entering page activate the correct animation
  componentDidMount(){
    if(this.props.page === '3') {
      this.enterAnimation()
    } else {
      this.exitAnimation()
    }
  }

  //Clear any timeouts if unmounted
  componentWillUnmount() {
    this.timeoutArray.forEach(clearTimeout);
  }

  render() {
    return (
      <Content>
        <TitleContainer>
          <h1>My Work</h1>
          <CodeBirdContainer pose={this.state.animation}>
            <CodeBird hidden={false} pose='happy' flapping={this.state.flapping}/>
          </CodeBirdContainer>
        </TitleContainer>
        <PortfolioContainer pose={this.state.animation}>
          <CardAlign>
            {this.state.cardInfo.map((element,index) =>
              <PortfolioCard
                key={index}
                name={element.name}
                link={element.link}
                description={element.description}
                imgLink={element.imgLink}/>)}
          </CardAlign>
        </PortfolioContainer>
      </Content>
    )
  }
}

export default Portfolio