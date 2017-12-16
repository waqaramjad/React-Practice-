import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Docs extends Component {
 
  Docs()
  {
 this.props.history.push('/about');
  }
 
  render() {
    return (
      <div className="App">
        <h1>Docs main </h1>
        <h1>{this.props.match.params.rollno}</h1>
        <button onClick={this.Docs.bind(this)}>Go to Docs  </button>


      </div>
    );
  }
}

export default Docs;
