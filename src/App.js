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
    images
  }

  goodClick = () => {
    this.setState({ count: this.state.count +1
    })
  }

  reset = () =>{
    this.setState({ count: 0 })
  }

  newBest = () => {
    if (this.state.count >= this.state.highScore)
    this.setState ({highScore: this.state.count }) 
  }



  render() {
    return (<div>
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
          removeFriend={this.removeFriend}

        />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
