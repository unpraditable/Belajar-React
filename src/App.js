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
        otherState: 'some other value',
        showPersons: false
    }
    
    deletePersonHandler = (personIndex) => {
//        const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    
  render() {
      
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
      };
      
      let persons = null;
      
      if (this.state.showPersons) {
          persons = (
            <div>
              {this.state.persons.map((person,index) => {
                return <Person 
                        click={ () => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} />
              })}
            </div>
                
          );
      }
      
    return (
      <div className="App">
        <h1>Hello, I am a React Application</h1>
        <h1>Is this working?</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;
