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
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState( {
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App container">
        <h1 className="header"> Sogeti Employee Directory </h1>
        <div className="row">
          
        { this.state.employees.map((employee, index) => {
          return (
            <div className="media col-12 mb-4 p-3 directory-entry">
            <img src={employee.img} className="mr-3 directory-image" alt="..."/>
            <div className="media-body">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
          </div>
              <h5 className="mt-0 directory-name">{employee.name}</h5>
              unknown
            </div>
          </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
