import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import ImageCard from "./components/imageCard/imageCard";
import Images from "./images.json";



class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {

      Images, 
        
      score: 0,

      highScore: 0,

      message: ""
    }

    this.handleClick = this.handleClick.bind(this);
    
    
  }



  handleClick (idi) {

    const shuffled = this.state.Images.map (x => x);

    function shuffle(array) {      
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
      }      
    };

    shuffle(shuffled);

    /* const {Images} = this.state; */


    shuffled.forEach(image => {
      if (image.id === idi) {
        if (image.clicked === false) {
          image.clicked = true;
         
    this.setState({ 
      Images : shuffled,
      score: this.state.score + 1,
      message : "Good memory!"
    })
    
    if (this.state.score === this.state.highScore) {
      this.setState({
        highScore : this.state.highScore + 1
      })
    }         
          } else {
            
        this.handleReset();    
      
      } 
    }
  })
}
/* const resetData = data.map(item => ({ ...item, clicked: false}));
    return this. */

  handleReset () {
    console.log("Oh no! Disastrous!");
    
    const arrayReset = this.state.Images.map(image => ({...image, clicked: false}));

    this.setState({
      Images: arrayReset,
      score : 0,
      message : "Oh no! Try again!"
    })
  }

render() {
  return (

    <div>
      <div className="jumbotron title-bar text-center">
      <h1>Memory Clicker</h1>
      <p>There can be only one. Click.</p>
      <div className = "scoreboard">
        <h3>Score: {this.state.score}</h3>
        <h3>High Score: {this.state.highScore}</h3>
        <h4>{this.state.message}</h4>
      </div>
    </div>

    <Wrapper>
     
      {this.state.Images.map(image => (
          <ImageCard
          handleClick = {this.handleClick}
          image = {image}
        />
      
        ))}  

  </Wrapper>
  </div>
  )
}

/* 
  return (
    <div className="App">
     {/*  <header className="App-header">
        
      </header> *//* }
    
    </div>
  ); */
}

export default App;
