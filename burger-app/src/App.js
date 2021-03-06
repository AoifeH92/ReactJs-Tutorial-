import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name:'Aoife', age:26},
      {name:'Ronan', age:26}
    ],
    showPersons:false
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name:newName, age:26},
      {name:'Ronan', age:27}
    ]});
  };

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name:'Aoife', age:26},
      {name:event.target.value, age:27}
    ]});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  

  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            click={this.switchNameHandler.bind(this, 'Oif', )}>My Hobbies are: GAA</Person>
        </div>
      )

      style.backgroundColor = 'red';
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>this is really working</p>
        <button style={style} 
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    )
  }
}

export default App;
