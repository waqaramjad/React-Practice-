
import React from 'react'


import {
    
        Link
    } from 'react-router-dom'



var Navbar = () =>(

<ul>

  <li>
  <Link to="/">Home</Link>
      
      </li>  
  <li>
    <Link to="/about">About</Link>
      
      </li>  
  <li>
      
    <Link to="/Docs">Docs</Link>
      
      </li>  
  {/* <Link to="/">Home</Link> */}
</ul>

    
      

    
)

export default Navbar;