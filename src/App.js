import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26},

        ],
        otherState: 'some other value'
    }
    
    switchNameHandler = (newName) => {
//        console.log('Was clicked!');
//        this.state.persons[0].name = 'Maximillian'
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27},
            ],
        })
    }
    
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 27},
            ],
        })
    }
    
  render() {
      
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
      }
      
    return (
      <div className="App">
        <h1>Hello, I am a React Application</h1>
        <h1>Is this working?</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Garrod')}>Switch Name</button>
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Garrod Ran')}
        changed={this.nameChangedHandler} />
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
