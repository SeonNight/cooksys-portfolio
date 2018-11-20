import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard'

import styled from 'styled-components'

const CardAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

class Portfolio extends Component {
  state = {
    cardInfo: [
      {
        link: 'https://github.com/cooksystemsinc/java-assessment-smart-share-SeonNight.git',
        imageLink: ''
      },
      {
        link: 'https://github.com/cooksystemsinc/social-media-assessment-SeonNight.git',
        imageLink: ''
      },
      {
        link: 'https://github.com/cooksystemsinc/js-assessment-dev-duel-SeonNight.git',
        imageLink: ''
      }
    ],
    page: 0
  }
  render() {
    return (
      <div>
        <h1>My Work</h1>
        <CardAlign>
          {this.state.cardInfo.map((element,index) => <PortfolioCard key={index} link={element.link} imageLink={element.imageLink}/>)}
        </CardAlign>
      </div>
    )
  }
}

export default Portfolio