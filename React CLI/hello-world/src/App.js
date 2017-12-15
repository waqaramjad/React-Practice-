import React, { Component } from 'react';
import './App.css'
// import './index.css';
  class HelloComponent extends Component
  {

  render()
  {
    return <a href= {this.props.link} style={{backgroundColor:this.props.color,display:this.props.saya}}  >{this.props.linktext}</a>
    
  }

  } 

  export default HelloComponent;