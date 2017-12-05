import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    loggedIn: false
  };

  checkLoggedInStatus = () => {
    axios
      .get('/secure')
      .then(response => {
        this.setState({
          loggedIn: response.data.loggedIn
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <button>{!this.state.loggedIn ? 'no' : 'yes'}</button>
      </div>
    );
  }
  componentDidMount = () => {
    this.checkLoggedInStatus();
  };
}

export default App;
