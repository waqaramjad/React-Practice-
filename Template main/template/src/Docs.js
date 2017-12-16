import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  
   Router,
  Route,
  Link
} from 'react-router-dom'

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
<ul>
<li><Link to='/Docs/23'>23</Link></li>
<li><Link to='/Docs/24'>24</Link></li>
<li><Link to='/Docs/25'>25</Link></li>

</ul>

      </div>
    );
  }
}

export default Docs;
