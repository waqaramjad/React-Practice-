import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  
   Router,
  Route,
  Link
} from 'react-router-dom'




class Docs extends Component {
 
  constructor(props)  {
super(props);

 
    

}
  Docs()
  {
 this.props.history.push('/about');
  }
 

  render() {

    var users = {
      23: {
        name:'waqar',
        cell:'56' 
      },
      24:{
        name:'asad',
        cell:'56'
      },
      25:{
        name:'ali',
        cell:'56'
      }
      
    }
    var selectUser = users[this.props.match.params.rollno];

    return (
      <div className="App">
        <h1>Docs main </h1>
        {/* <h1>{selectUser.cell}</h1> */}
       cell no :  {selectUser.name}
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
