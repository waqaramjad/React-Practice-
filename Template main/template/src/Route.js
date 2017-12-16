import React from 'react'
import App from './App';
import About from './about';
import Docs from './Docs';
import Navbar from './Navbar'

import {

    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Func = () =>(
<Router>

    <div>
    <Navbar/>
        
        <hr/>
        <hr/>
        <hr/>
        <Route exact path='/About' component={App}/>
        <Route exact path='/Docs' component={About}/>
        <Route exact path='/' component={Docs}/>
        
    </div>
</Router>

)

export default Func;