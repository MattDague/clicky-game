import React from 'react';
import ClickPic from "./components/clickpics"
import images from "./images.json"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import './App.css';

class App extends React.Component {
  
  state = {
    highScore: 0,
    count: 0, 
    images, 
    clickedArr: []
    
  }

  handleOnClick = event => {
    const images = this.state.images.map(image => image.id === event.id) ? images.clicked = true : 
    this.setState({
      images
    })
  }
  
  randomizer = () => {
    this.state.images.sort( (a,b) => {return 0.5 - Math.random()});
  };

  goodClick = () => {
    this.handleOnClick()
    this.randomizer();
    this.setState({ count: this.state.count + 1
    })
    this.newBest();

  }

  reset = () =>{
    this.setState({ count: 0 })
  }

  newBest = () => {
    if (this.state.count >= this.state.highScore) {
    this.setState ({highScore: this.state.highScore + 1 }) }
  }



  render() {
    return (
    <div>
      <Navbar
      count ={this.state.count} 
      highScore={this.state.highScore}></Navbar>
      <Wrapper>
       
        
        {this.state.images.map(images => (
        
        <ClickPic 
        
          name={images.name}
          key={images.id}
          id={images.id}
          image={images.image}
          clicked={images.clicked}
          goodClick={this.goodClick}

        />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;






