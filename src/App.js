import React, { Component } from 'react';
import HighScore from './components/HighScore'
import ImgDisplay from './components/ImgDisplay'
import characters from './characters.json'
import './App.css';

class App extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    characters
  }

  imageClicked = id => {
    this.shuffleImages(this.state.characters)
    this.setState({ characters })
  }

  gameOver = () => {
    this.setState({
      currentScore: 0
    })
  }

  handleCorrect = () => {
    this.setState({
      currentScore: this.state.currentScore +1
    })
  }

  shuffleImages = (array) => {
    array.sort(() => Math.random() - .5)
  }

  render() {
    return (
      <div>
        <HighScore highScore={this.state.highScore} currentScore={this.state.currentScore} />
        {this.state.characters.map(character => (
          <ImgDisplay
            id={character.id}
            key={character.id}
            image={character.image}
            clicked={character.clicked}
            imageClicked={this.imageClicked}
          />
        ))}
      </div>
    );
  }
}

export default App;
