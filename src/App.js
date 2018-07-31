import React, { Component } from 'react';
import './App.css';
import  CardList  from  './Person/CardList';
import Form  from  './Person/Form';
class App extends Component {
   state={
 
cards:[]
   };


  addNewCard=(cardInfo)=>{
 //console.log(cardInfo);
  this.setState(prevState=>({
  cards:prevState.cards.concat(cardInfo)
  
 }));

//console.log(cardInfo);
};
  render() {
    return (
      <div className="App">
        
        <Form  onSubmit={this.addNewCard}/>
        <CardList  cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
