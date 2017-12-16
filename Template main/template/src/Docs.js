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
        <h1>Docs my className is BSSE </h1>

        <button onClick={this.Docs.bind(this)}>Go to Docs  </button>


      </div>
    );
  }
}

export default Docs;
