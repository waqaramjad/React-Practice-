import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class About extends Component {
 
 home()
 {
this.props.history.push('/');
 }

 Docs()
 {
this.props.history.push('/Docs');
 }
 
  render() {
    return (
      <div className="App">
        <h1>about hy wiki</h1>
        <button onClick={this.home.bind(this)}>Go to home  </button>
        <button onClick={this.Docs.bind(this)}>Go to Docs  </button>
      </div>
    );
  }
}

export default About;
