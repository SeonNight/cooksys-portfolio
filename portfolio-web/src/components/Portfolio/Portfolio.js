import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard'

import styled from 'styled-components'


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
/*
const CardAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`*/
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
    page: 0
  }

  
  render() {
    return (
      <Content>
        <h1>My Work</h1>
        <CardAlign>
          {this.state.cardInfo.map((element,index) =>
            <PortfolioCard
              key={index}
              name={element.name}
              link={element.link}
              description={element.description}
              imgLink={element.imgLink}/>)}
        </CardAlign>
      </Content>
    )
  }
}

export default Portfolio