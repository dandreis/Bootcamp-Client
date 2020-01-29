import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    //State
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/getSogetiEmployees')
    .then(employees => employees.json())
    .then(employees => {
      console.log(employees)
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <h1> Sogeti Employee Directory </h1>
        <ol>
        { this.state.employees.map((employee, index) => {
          return (
              <li key={index}>{employee.name}</li>
            )
          })
        }
        </ol>
      </div>
    );
  }
}

export default App;
