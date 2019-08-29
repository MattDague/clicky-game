import React from 'react';
import ClickPic from "./components/clickpics"
import images from "./images.json"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import './App.css';

class App extends React.Component {
  //default state of app
  state = {
    highScore: 0,
    count: 0, 
    images, 
    clickedArr: []
    
  }

// function for when a picture is clicked
  clickEvent = event => {

    const image = event.target.id;
    //checks to see if the id has already been clicked
    const isClicked = this.state.clickedArr.indexOf(image) > -1;
    //ternary check for goodclick or bad click
    isClicked ? this.badClick() : 
      this.goodClick() 
      this.setState({
        clickedArr: this.state.clickedArr.concat(image),
      }, () => {
        //all 12 pics are clicked
        if (this.state.count === 12) {
          alert("You win!");
          this.randomizer();
          this.reset();
          this.newBest();
        }
      });
    
  };

  //function for clicking an unclicked pic
  goodClick = () =>{
    this.setState ({
      count: this.state.count + 1
    });
    this.randomizer();
   

  }
  //function if picutre is already clicked 
  badClick = () => {
    this.randomizer();
    this.newBest();
    this.reset();
    alert("Try again!")
  }
  //displays images from array in random order
  randomizer = () => {
    this.state.images.sort( (a,b) => {return 0.5 - Math.random()});
    
  };

//game reset
  reset = () =>{
    this.setState({ count: 0,
      clickedArr: []

    })
  }
  //sets highscore to new value
  newBest = () => {
    if (this.state.count > this.state.highScore) {
    this.setState ({highScore: this.state.count}) }
  }

//renders components to screen
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
          clickEvent={this.clickEvent}
          
        />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
