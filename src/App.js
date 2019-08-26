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
  
  randomizer = () => {
    this.state.images.sort( (a,b) => {return 0.5 - Math.random()});
  };

  goodClick = () => {
    this.randomizer();
    this.setState({ count: this.state.count + 1
    })
    this.newBest();
    // const clickedArr = []
    // if (clickedArr.includes(this.state.images) === false) {
    // clickedArr.push(this.state.images.id);
    // console.log(clickedArr)
    // }
    
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
          goodClick={this.goodClick}

        />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;






