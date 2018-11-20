import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div>
        <h1>About Me</h1>
        <div>
          <div>
            <h2>My Story</h2>
            <p>I was born in South Korea, and moved here when I was about 6 years old. I help out at my korean church with the powerpoint, soundsystem, translation, since it's a korean church with some english speaking memebers, and play the drums. When I was little, I wanted to become an artist, until one bored day in math class. It was my last year in high school and I had a graphic calculator in front of me, standard issue TI-84, but a silver edition. Fun fact, there is the prgm button that you can press  that will allow you to write program on these caluclator. If I wanted to I could have cheated on sooo many math tests. The first time I pressed it there was this one program already there that calculated pythagorean theorem, you know the b plus minus square root of bla bla bla. Took me a bit to understand what was going on, but I was able to make my first program: Adding two numbers together. I've made other programs on it since then, mazes, a simple drawing program, snake, connect four, and pet battles. And instead of going to college for art like I planned, I graduated with a Bachleor's degree in Computer Science, but I still did get a minor in Animation. Since programs or otherwise, I love creating things. Give me popicle sticks and I can make you a combination locked box.</p>
          </div>
          <div>
            <h2>Resume</h2>
            <img src={require("../../images/resume.png")} alt="resume" />
          </div>
        </div>
      </div>)
  }
}

export default About