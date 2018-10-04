import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age: 26},

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
   
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        const person = {
            ...this.state.persons[personIndex]
        };
        
//        const person = Object.assign({}, this.state.persons[personIndex])
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState({persons: persons});
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    
    render() {
      
      const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
      };
      
      let persons = null;
      let btnClass = '';
      
      if (this.state.showPersons) {
          persons = (
            <div>
              {this.state.persons.map((person,index) => {
                return <Person 
                    click={ () => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
              })}
            </div>        
        );
        btnClass = classes.Red;
      }
      
    const assignedClasses = []; 
    if (this.state.persons.length <= 2){
        assignedClasses.push('red');
    }

    if (this.state.persons.length <= 1) {
        assignedClasses.push('bold');
    }
      

    return (
        <div className={classes.App}>
            <h1>Hello, I am a React Application</h1>
            <p className={assignedClasses.join(' ')}>Is this working?</p>
            <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>Switch Name</button>
            {persons}
        </div>      
    );
  }
}

export default App;